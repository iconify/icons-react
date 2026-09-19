import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/davbkx99a.css';
import '../../css/o/o_kyyrbhe.css';
import '../../css/b/bjwr08bib.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="davbkx99a"/><path class="o_kyyrbhe"/><path class="bjwr08bib"/></g>`,
		"fallback": "glyphs-poly:comment-remove",
	});
}

export default Component;
