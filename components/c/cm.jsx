import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rlsrn9q2c.css';
import '../../css/z/zij55eb5n.css';
import '../../css/e/ecctieb4n.css';
import '../../css/l/l6ax0lbka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rlsrn9q2c"/><path class="zij55eb5n"/><path class="ecctieb4n"/><path class="l6ax0lbka"/></g>`,
		"fallback": "circle-flags:cm",
	});
}

export default Component;
