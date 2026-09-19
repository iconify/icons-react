import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/o8eqkab3x.css';
import '../../css/w/w87otfbzz.css';
import '../../css/j/jg71nx19h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="o8eqkab3x"/><path class="w87otfbzz"/><path class="jg71nx19h"/></g>`,
		"fallback": "circle-flags:gf",
	});
}

export default Component;
