import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vzvm2bciq.css';
import '../../css/b/bf33dpbcm.css';
import '../../css/k/k39afi40k.css';
import '../../css/w/wfqfj4y6d.css';
import '../../css/n/nwx8obb9k.css';
import '../../css/d/dox0yubvu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="vzvm2bciq"/><path class="bf33dpbcm"/><path class="k39afi40k"/><path class="wfqfj4y6d"/><path class="nwx8obb9k"/><path clip-rule="evenodd" class="dox0yubvu"/></g>`,
		"fallback": "icon-park:financing-one",
	});
}

export default Component;
