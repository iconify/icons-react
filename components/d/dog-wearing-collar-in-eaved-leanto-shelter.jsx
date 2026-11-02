import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7g6sibte.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7g6sibte"/>`,
		"fallback": "pinhead:dog-wearing-collar-in-eaved-leanto-shelter",
	});
}

export default Component;
