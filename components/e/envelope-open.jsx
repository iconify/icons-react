import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vov52db9q.css';
import '../../css/i/i_eyx5b6p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vov52db9q"/><path class="i_eyx5b6p"/></g>`,
		"fallback": "glyphs-poly:envelope-open",
	});
}

export default Component;
