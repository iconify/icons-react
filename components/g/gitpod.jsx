import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn5-jrewn.css';
import '../../css/i/iuzmekejb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGKu1HaeJw" x1="60.966" x2="19.202" y1="13.48" y2="78.93" gradientTransform="matrix(1.58024 0 0 1.42222 0 .61)" gradientUnits="userSpaceOnUse"><stop offset="0" class="nn5-jrewn"/><stop offset="1" class="nn5-jrewn"/></linearGradient></defs><path fill="url(#SVGKu1HaeJw)" class="iuzmekejb"/>`,
		"fallback": "devicon-plain:gitpod",
	});
}

export default Component;
