import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/o8eqkab3x.css';
import '../../css/z/zm3xmlb4u.css';
import '../../css/m/m32fw5efl.css';
import '../../css/t/t-ljgqbzr.css';
import '../../css/r/rwf4dg05c.css';
import '../../css/f/f8y05kbck.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="o8eqkab3x"/><path class="zm3xmlb4u"/><circle class="m32fw5efl"/><path class="t-ljgqbzr"/><path class="rwf4dg05c"/><path class="f8y05kbck"/></g>`,
		"fallback": "circle-flags:cx",
	});
}

export default Component;
