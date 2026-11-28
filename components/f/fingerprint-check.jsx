import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfa9x7v7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfa9x7v7s"/>`,
		"fallback": "noviair:fingerprint-check",
	});
}

export default Component;
