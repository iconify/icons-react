import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idnom4b3s.css';
import '../../css/j/jto8zscfm.css';
import '../../css/z/zdlr2et8c.css';
import '../../css/k/k724wmbkt.css';
import '../../css/c/cjphfqblu.css';
import '../../css/f/fqq0hubgc.css';
import '../../css/y/yl0shbbtt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="idnom4b3s"/><path class="jto8zscfm"/><path class="zdlr2et8c"/><path class="k724wmbkt"/><path class="cjphfqblu"/><path class="fqq0hubgc"/><path class="yl0shbbtt"/></g>`,
		"fallback": "fluent-emoji-flat:bagel",
	});
}

export default Component;
