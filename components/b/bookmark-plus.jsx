import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o5whxw56e.css';
import '../../css/e/eemyijm4m.css';
import '../../css/l/lrf7ghb1j.css';
import '../../css/d/ducyueofg.css';
import '../../css/a/ac3zzmbmm.css';
import '../../css/q/q8gkvdb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o5whxw56e wm-shadow"/><path class="eemyijm4m"/><path class="lrf7ghb1j"/><path class="ducyueofg"/><path class="ac3zzmbmm"/><path class="q8gkvdb7g"/></g>`,
		"fallback": "withicons-retro:bookmark-plus",
	});
}

export default Component;
