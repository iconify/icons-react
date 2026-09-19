import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcez0mbxt.css';

const viewBox = {"width":480,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcez0mbxt"/>`,
		"fallback": "zmdi:code-setting",
	});
}

export default Component;
