import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_a2kgkil.css';
import '../../css/l/lluxz55ax.css';
import '../../css/w/wtojz9b7o.css';
import '../../css/x/xe60m3b1u.css';
import '../../css/b/bpyb_t4gd.css';
import '../../css/z/z8tb25j-l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_a2kgkil"/><path class="lluxz55ax"/><path class="wtojz9b7o"/><path class="xe60m3b1u"/><path class="bpyb_t4gd"/><path class="z8tb25j-l"/></g>`,
		"fallback": "fluent-emoji-flat:chocolate-bar",
	});
}

export default Component;
