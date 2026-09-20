import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp6xkbjgw.css';
import '../../css/s/scd45hs3y.css';
import '../../css/c/cdw17kolu.css';
import '../../css/v/v9u8nhb5n.css';
import '../../css/x/x8rkn-b2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp6xkbjgw"/><path class="scd45hs3y"/><path class="cdw17kolu"/><linearGradient id="SVGxXcfKbFN" x1="53.823" x2="458.177" y1="60.653" y2="60.653" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="v9u8nhb5n"/></linearGradient><path fill="url(#SVGxXcfKbFN)" class="x8rkn-b2l"/>`,
		"fallback": "selfhst:anycable-dark",
	});
}

export default Component;
