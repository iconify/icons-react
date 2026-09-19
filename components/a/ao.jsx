import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/z2rf0tshj.css';
import '../../css/u/unba6pbly.css';
import '../../css/g/gqb1ulgai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="z2rf0tshj"/><path class="unba6pbly"/><path class="gqb1ulgai"/></g>`,
		"fallback": "circle-flags:ao",
	});
}

export default Component;
