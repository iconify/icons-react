import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwjft7bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwjft7bhb"/>`,
		"fallback": "simple-icons:gnome",
	});
}

export default Component;
