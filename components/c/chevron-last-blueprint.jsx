import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ih1tp_bsv.css';
import '../../css/k/ky_2sbg2r.css';
import '../../css/p/pchpq8loe.css';
import '../../css/z/zhjtmfbrj.css';
import '../../css/b/b4r7z9b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ih1tp_bsv wm-deco"/><path class="ky_2sbg2r wm-deco"/><path class="pchpq8loe wm-k"/><path class="wm-a zhjtmfbrj"/><path class="b4r7z9b8r wm-k"/></g>`,
		"fallback": "withicons:chevron-last-blueprint",
	});
}

export default Component;
