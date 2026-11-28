import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uc95qjbkt.css';
import '../../css/p/pypz_wuzy.css';
import '../../css/c/csqhm8b9f.css';
import '../../css/u/u-w8q3b3b.css';
import '../../css/x/x2wpal43q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uc95qjbkt"/><path class="pypz_wuzy"/><path class="csqhm8b9f"/><path class="u-w8q3b3b"/><path class="x2wpal43q"/></g>`,
		"fallback": "iconaut:dna",
	});
}

export default Component;
