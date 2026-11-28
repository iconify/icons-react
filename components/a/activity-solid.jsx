import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjg6l7blg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjg6l7blg"/>`,
		"fallback": "iconaut:activity-solid",
	});
}

export default Component;
