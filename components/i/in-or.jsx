import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/algohugap.css';
import '../../css/o/o0nuu56uu.css';
import '../../css/u/u-l9_db_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="algohugap"/><path class="o0nuu56uu"/><path class="u-l9_db_j"/></g>`,
		"fallback": "circle-flags:in-or",
	});
}

export default Component;
