import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfcsb5sbn.css';
import '../../css/m/mfns35b9r.css';
import '../../css/m/m9mk-kbax.css';
import '../../css/i/i_dr0j9wh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sfcsb5sbn"/><path class="mfns35b9r"/><path class="m9mk-kbax"/><path clip-rule="evenodd" class="i_dr0j9wh"/></g>`,
		"fallback": "glyphs:globe-stand-east-bold",
	});
}

export default Component;
