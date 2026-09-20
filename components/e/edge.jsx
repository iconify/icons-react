import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8s_7ub3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8s_7ub3d"/>`,
		"fallback": "material-icon-theme:edge",
	});
}

export default Component;
