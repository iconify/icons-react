import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zos92rv0b.css';
import '../../css/b/bh1n1e5pw.css';
import '../../css/a/azwww1b8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zos92rv0b"/><path clip-rule="evenodd" class="bh1n1e5pw"/><path clip-rule="evenodd" class="azwww1b8x"/></g>`,
		"fallback": "streamline-kameleon-color:christmas-tree-duo",
	});
}

export default Component;
