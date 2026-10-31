import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxy4eau_a.css';
import '../../css/u/uujgzzyfl.css';
import '../../css/o/oql98i9ga.css';
import '../../css/t/tzlrevc4i.css';
import '../../css/o/orp9guiln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xxy4eau_a"/><path class="uujgzzyfl wm-shadow"/><path class="oql98i9ga"/><path class="tzlrevc4i"/><path class="orp9guiln"/></g>`,
		"fallback": "withicons-brutal:file-audio",
	});
}

export default Component;
