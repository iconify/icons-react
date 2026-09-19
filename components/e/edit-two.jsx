import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/ypy9jqbnx.css';
import '../../css/k/kktj-w0ef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ypy9jqbnx"/><path class="kktj-w0ef"/></g>`,
		"fallback": "icon-park:edit-two",
	});
}

export default Component;
