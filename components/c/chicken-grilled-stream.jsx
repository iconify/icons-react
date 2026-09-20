import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/u/uf0t3abhr.css';
import '../../css/i/ijwv13b6x.css';
import '../../css/i/ie_giubao.css';
import '../../css/v/vbjlnvb0q.css';
import '../../css/d/dps-4hdeh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="uf0t3abhr"/><path class="ijwv13b6x"/><path class="ie_giubao"/><path class="vbjlnvb0q"/><path class="dps-4hdeh"/></g>`,
		"fallback": "streamline:chicken-grilled-stream",
	});
}

export default Component;
