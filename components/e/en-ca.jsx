import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/t/tnf5gl-9i.css';
import '../../css/w/wvq1_k87b.css';
import '../../css/o/o27up2v8x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="tnf5gl-9i"/><path class="wvq1_k87b"/><path class="o27up2v8x"/></g>`,
		"fallback": "circle-flags:en-ca",
	});
}

export default Component;
