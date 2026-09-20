import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ir1bwpb5n.css';
import '../../css/h/hqxv7vfui.css';
import '../../css/n/nlp5r_b7n.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ir1bwpb5n"/><path clip-rule="evenodd" class="hqxv7vfui"/><path clip-rule="evenodd" class="nlp5r_b7n"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:checkmark-outlined-circle-off",
	});
}

export default Component;
