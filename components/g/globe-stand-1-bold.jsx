import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfcsb5sbn.css';
import '../../css/j/jzgv6j3ns.css';
import '../../css/m/m9mk-kbax.css';
import '../../css/m/m9f1br6ib.css';
import '../../css/m/m217esbjc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sfcsb5sbn"/><path class="jzgv6j3ns"/><path class="m9mk-kbax"/><path class="m9f1br6ib"/><path class="m217esbjc"/></g>`,
		"fallback": "glyphs:globe-stand-1-bold",
	});
}

export default Component;
