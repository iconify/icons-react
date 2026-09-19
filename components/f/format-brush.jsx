import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/t9rwszbyz.css';
import '../../css/q/qekkj2y0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="t9rwszbyz"/><path class="qekkj2y0p"/></g>`,
		"fallback": "icon-park:format-brush",
	});
}

export default Component;
