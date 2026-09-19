import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgrx5d4dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgrx5d4dy"/>`,
		"fallback": "iconamoon:heart-light",
	});
}

export default Component;
