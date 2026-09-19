import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/i/i0xmk6bak.css';
import '../../css/a/a86cngbtj.css';
import '../../css/b/bzel2n_ir.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="i0xmk6bak"/><path class="a86cngbtj"/><path class="bzel2n_ir"/></g>`,
		"fallback": "icon-park-outline:follow-up-date-sort",
	});
}

export default Component;
