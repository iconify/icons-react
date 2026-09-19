import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjy8i0bur.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fjy8i0bur"/>`,
		"fallback": "gravity-ui:box",
	});
}

export default Component;
