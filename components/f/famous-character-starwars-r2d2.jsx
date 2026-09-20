import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o64x2918v.css';
import '../../css/v/v2gvpubcr.css';
import '../../css/g/g_seqxb6b.css';
import '../../css/b/bpod7mzyw.css';
import '../../css/s/sc7p9pb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o64x2918v"/><path class="v2gvpubcr"/><path class="g_seqxb6b"/><path class="bpod7mzyw"/><path class="sc7p9pb0b"/></g>`,
		"fallback": "streamline-freehand-color:famous-character-starwars-r2d2",
	});
}

export default Component;
