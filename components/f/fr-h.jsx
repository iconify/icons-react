import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/t/t8a2l4b_w.css';
import '../../css/e/e4prqhbih.css';
import '../../css/q/q-jmt8b8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="t8a2l4b_w"/><path class="e4prqhbih"/><path class="q-jmt8b8w"/></g>`,
		"fallback": "circle-flags:fr-h",
	});
}

export default Component;
