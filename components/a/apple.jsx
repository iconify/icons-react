import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7hgixbly.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7hgixbly"/>`,
		"fallback": "uiw:apple",
	});
}

export default Component;
