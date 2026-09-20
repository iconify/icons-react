import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hgxldke9d.css';
import '../../css/y/ypy-a6bdt.css';
import '../../css/e/egm-6jb-e.css';
import '../../css/r/rg8vhvbio.css';
import '../../css/u/u9iziiqda.css';
import '../../css/i/ipxygcxkm.css';
import '../../css/o/o49uv6bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hgxldke9d"/><path class="ypy-a6bdt"/><path class="egm-6jb-e"/><path class="rg8vhvbio"/><path class="u9iziiqda"/><path class="ipxygcxkm"/><path clip-rule="evenodd" class="o49uv6bhn"/></g>`,
		"fallback": "solar:calendar-outline",
	});
}

export default Component;
