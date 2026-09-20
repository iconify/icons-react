import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kert4ou6p.css';
import '../../css/v/v8diuwbyk.css';
import '../../css/s/s8cvb_hjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kert4ou6p"/><path clip-rule="evenodd" class="v8diuwbyk"/><path clip-rule="evenodd" class="s8cvb_hjx"/></g>`,
		"fallback": "streamline-plump-color:ai-technology-spark-flat",
	});
}

export default Component;
