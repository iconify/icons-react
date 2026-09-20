import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni66x6cvb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni66x6cvb"/>`,
		"fallback": "material-icon-theme:heroku",
	});
}

export default Component;
