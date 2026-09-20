import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9c9qvbuf.css';
import '../../css/p/pm5pzwhvz.css';
import '../../css/u/ujmnkboja.css';
import '../../css/a/ag3kxs88v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGZYnxua0q" x1="0" x2="512" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d9c9qvbuf"/><stop offset="1" class="pm5pzwhvz"/></linearGradient><path fill="url(#SVGZYnxua0q)" class="ujmnkboja"/><path class="ag3kxs88v"/>`,
		"fallback": "selfhst:9router",
	});
}

export default Component;
