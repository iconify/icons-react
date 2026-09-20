import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex0pby3hg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex0pby3hg"/>`,
		"fallback": "selfhst:duolingo-light",
	});
}

export default Component;
