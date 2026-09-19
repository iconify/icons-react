import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/ffz6ixb5w.css';
import '../../css/u/uo5f_jeto.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ffz6ixb5w"/><path class="uo5f_jeto"/></g>`,
		"fallback": "si-glyph:button-hd",
	});
}

export default Component;
