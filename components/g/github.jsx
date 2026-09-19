import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkb-i8_jc.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkb-i8_jc"/>`,
		"fallback": "bytesize:github",
	});
}

export default Component;
