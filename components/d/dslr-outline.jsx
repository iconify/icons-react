import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6kkj_61z.css';
import '../../css/r/rk1l7-bke.css';
import '../../css/v/voewrtvds.css';
import '../../css/l/lin4p__le.css';
import '../../css/a/afhptjbze.css';
import '../../css/i/i71sa4syx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6kkj_61z"/><path clip-rule="evenodd" class="rk1l7-bke"/><path clip-rule="evenodd" class="voewrtvds"/><path class="lin4p__le"/><path clip-rule="evenodd" class="afhptjbze"/><path clip-rule="evenodd" class="i71sa4syx"/></g>`,
		"fallback": "glyphs:dslr-outline",
	});
}

export default Component;
