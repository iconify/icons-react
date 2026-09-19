import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxijpqboc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxijpqboc"/>`,
		"fallback": "f7:book-fill",
	});
}

export default Component;
