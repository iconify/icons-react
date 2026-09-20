import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8jn1nb5z.css';
import '../../css/k/k27fbp9ab.css';
import '../../css/n/n083b1prs.css';
import '../../css/c/ci2pabbqb.css';
import '../../css/p/pt5ixiblk.css';
import '../../css/e/epr3qdb3b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8jn1nb5z"/><path class="k27fbp9ab"/><path clip-rule="evenodd" class="n083b1prs"/><path class="ci2pabbqb"/><path class="pt5ixiblk"/><path class="epr3qdb3b"/></g>`,
		"fallback": "streamline-color:color-palette",
	});
}

export default Component;
