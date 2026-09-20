import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym5a20iat.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym5a20iat"/>`,
		"fallback": "osmic:convenience-14",
	});
}

export default Component;
