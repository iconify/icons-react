import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/o/obvh9vbmm.css';
import '../../css/j/jtj6nabty.css';
import '../../css/t/t7urb3kso.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="obvh9vbmm"/><path class="jtj6nabty"/><path class="t7urb3kso"/></g>`,
		"fallback": "icon-park:delete-four",
	});
}

export default Component;
