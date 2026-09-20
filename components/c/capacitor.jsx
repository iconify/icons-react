import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q23zuob8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path paint-order="fill markers stroke" class="q23zuob8h"/>`,
		"fallback": "material-icon-theme:capacitor",
	});
}

export default Component;
