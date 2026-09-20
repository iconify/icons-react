import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_o2gabit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_o2gabit"/>`,
		"fallback": "material-icon-theme:blitz",
	});
}

export default Component;
