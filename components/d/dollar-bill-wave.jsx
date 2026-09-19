import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tn9td58ck.css';
import '../../css/k/k452hcbmf.css';
import '../../css/c/c2-vn7ifl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tn9td58ck"/><path clip-rule="evenodd" class="k452hcbmf"/><path class="c2-vn7ifl"/></g>`,
		"fallback": "glyphs-poly:dollar-bill-wave",
	});
}

export default Component;
