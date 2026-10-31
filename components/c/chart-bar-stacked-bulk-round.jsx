import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kytqg5ami.css';
import '../../css/j/jqyqz0bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kytqg5ami"/><path class="jqyqz0bst"/></g>`,
		"fallback": "coolicons:chart-bar-stacked-bulk-round",
	});
}

export default Component;
