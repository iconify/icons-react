import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-an6tb_w.css';
import '../../css/b/b8yay4_5i.css';
import '../../css/l/l076-htbj.css';
import '../../css/i/iba0uvb3k.css';
import '../../css/q/q86hgzv6o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u-an6tb_w"/><path class="b8yay4_5i"/><path class="l076-htbj"/><path class="iba0uvb3k"/><path class="q86hgzv6o"/></g>`,
		"fallback": "pepicons:angle-down-print",
	});
}

export default Component;
