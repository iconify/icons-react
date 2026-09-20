import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak1ggh6ry.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak1ggh6ry"/>`,
		"fallback": "material-icon-theme:commitizen",
	});
}

export default Component;
