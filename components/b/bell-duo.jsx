import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5f05obqd.css';
import '../../css/i/idcl1o6gj.css';
import '../../css/i/i4_ls1u0b.css';
import '../../css/r/rkot81n8t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o5f05obqd"/><path class="idcl1o6gj"/><path class="i4_ls1u0b"/><path class="rkot81n8t"/></g>`,
		"fallback": "glyphs:bell-duo",
	});
}

export default Component;
