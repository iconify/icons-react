import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/eu38be4cr.css';
import '../../css/v/v3bfcx4mg.css';
import '../../css/q/q-jmt8b8w.css';
import '../../css/k/kw1i4pb1k.css';
import '../../css/w/wmw783fky.css';
import '../../css/n/n5greobqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="eu38be4cr"/><path class="v3bfcx4mg"/><path class="q-jmt8b8w"/><circle class="kw1i4pb1k"/><path class="wmw783fky"/><path class="n5greobqx"/></g>`,
		"fallback": "circle-flags:ec",
	});
}

export default Component;
