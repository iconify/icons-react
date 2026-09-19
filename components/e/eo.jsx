import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/t/t2kfjdamr.css';
import '../../css/t/tznoqhb6c.css';
import '../../css/u/u8p725-mb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="t2kfjdamr"/><path class="tznoqhb6c"/><path class="u8p725-mb"/></g>`,
		"fallback": "circle-flags:eo",
	});
}

export default Component;
