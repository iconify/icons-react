import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/li8omp20o.css';
import '../../css/t/typubzb2u.css';
import '../../css/q/qxxbbs_qk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="li8omp20o"/><path clip-rule="evenodd" class="typubzb2u"/><path clip-rule="evenodd" class="qxxbbs_qk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:elevator",
	});
}

export default Component;
