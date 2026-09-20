import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gurdrgddr.css';

const viewBox = {"width":124,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gurdrgddr"/>`,
		"fallback": "thesvg-color:anker",
	});
}

export default Component;
