import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d9-pi1foi.css';
import '../../css/z/zxaanroxk.css';
import '../../css/j/j1-mmebyw.css';
import '../../css/k/kv-gf4k6t.css';
import '../../css/n/n-e1f-jmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d9-pi1foi wm-shadow"/><path class="zxaanroxk"/><path class="j1-mmebyw"/><path class="kv-gf4k6t"/><path class="n-e1f-jmp"/></g>`,
		"fallback": "withicons-retro:cup-soda",
	});
}

export default Component;
