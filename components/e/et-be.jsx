import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/algohugap.css';
import '../../css/j/j8o0txp9h.css';
import '../../css/u/ul3ge0b9c.css';
import '../../css/m/mj08j2bad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="algohugap"/><path class="j8o0txp9h"/><path class="ul3ge0b9c"/><path class="mj08j2bad"/></g>`,
		"fallback": "circle-flags:et-be",
	});
}

export default Component;
