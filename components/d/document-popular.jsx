import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cej47kqnc.css';
import '../../css/r/rdfge7bju.css';
import '../../css/c/cln8p0noc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cej47kqnc"/><path class="rdfge7bju"/><path class="cln8p0noc"/></g>`,
		"fallback": "tdesign:document-popular",
	});
}

export default Component;
