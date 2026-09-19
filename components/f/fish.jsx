import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_z8u2bhx.css';

const viewBox = {"width":2048,"height":1344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_z8u2bhx"/>`,
		"fallback": "vs:fish",
	});
}

export default Component;
