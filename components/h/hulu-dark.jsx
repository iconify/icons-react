import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu811do9k.css';

const viewBox = {"width":243.5,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nu811do9k"/>`,
		"fallback": "thesvg-color:hulu-dark",
	});
}

export default Component;
