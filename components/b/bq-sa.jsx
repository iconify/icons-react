import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/r1m6-3blo.css';
import '../../css/a/amme50bko.css';
import '../../css/u/uyqqxugha.css';
import '../../css/w/w_3cmkzsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="r1m6-3blo"/><path class="amme50bko"/><path class="uyqqxugha"/><path class="w_3cmkzsz"/></g>`,
		"fallback": "circle-flags:bq-sa",
	});
}

export default Component;
