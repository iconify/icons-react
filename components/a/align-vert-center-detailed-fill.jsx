import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as9l66-0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="as9l66-0s"/>`,
		"fallback": "si:align-vert-center-detailed-fill",
	});
}

export default Component;
