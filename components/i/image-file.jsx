import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spmlq2g0x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spmlq2g0x"/>`,
		"fallback": "icons8:image-file",
	});
}

export default Component;
