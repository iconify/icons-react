import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcki4abqo.css';

const viewBox = {"width":386,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcki4abqo"/>`,
		"fallback": "whh:business",
	});
}

export default Component;
