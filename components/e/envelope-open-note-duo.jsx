import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egmt2gfpt.css';
import '../../css/a/ab73cxb4x.css';
import '../../css/j/j6e3-sg1a.css';
import '../../css/c/cb-if1bxi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="egmt2gfpt"/><path class="ab73cxb4x"/><path class="j6e3-sg1a"/><path class="cb-if1bxi"/></g>`,
		"fallback": "glyphs:envelope-open-note-duo",
	});
}

export default Component;
