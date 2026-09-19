import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/p5posd0gc.css';
import '../../css/e/e2-3bjb3b.css';
import '../../css/l/liuf54coe.css';
import '../../css/q/qtr4ntb8j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="p5posd0gc"/><path class="e2-3bjb3b"/><path class="liuf54coe"/><path class="qtr4ntb8j"/></g>`,
		"fallback": "icon-park:cooking-pot",
	});
}

export default Component;
