import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jwgpxoo3x.css';
import '../../css/t/tk71-d9_p.css';
import '../../css/d/dm3lzbbtn.css';
import '../../css/j/jvu_1rs4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jwgpxoo3x"/><path class="tk71-d9_p"/><path class="dm3lzbbtn"/><path class="jvu_1rs4r"/></g>`,
		"fallback": "material-icon-theme:google",
	});
}

export default Component;
