import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/palu_ab3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="palu_ab3m"/>`,
		"fallback": "keyline-icons:brick-wall-fill",
	});
}

export default Component;
