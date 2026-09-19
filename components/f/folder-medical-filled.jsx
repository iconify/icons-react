import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb_u2dh5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb_u2dh5e"/>`,
		"fallback": "griddy-icons:folder-medical-filled",
	});
}

export default Component;
