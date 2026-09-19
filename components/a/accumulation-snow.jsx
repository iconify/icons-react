import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx4b9vbux.css';
import '../../css/m/m24l3fbsc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx4b9vbux"/><path class="m24l3fbsc"/>`,
		"fallback": "carbon:accumulation-snow",
	});
}

export default Component;
