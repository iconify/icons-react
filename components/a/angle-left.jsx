import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzl0cwb5v.css';
import '../../css/k/knq4cqwzw.css';
import '../../css/u/ufhld3mmu.css';
import '../../css/v/vbuonu-3b.css';
import '../../css/i/ivigl7ula.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lzl0cwb5v"/><path class="knq4cqwzw"/><path class="ufhld3mmu"/><path class="vbuonu-3b"/><path class="ivigl7ula"/></g>`,
		"fallback": "pepicons-print:angle-left",
	});
}

export default Component;
