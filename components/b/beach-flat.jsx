import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xma2v6a8z.css';
import '../../css/b/bha-fvb6w.css';
import '../../css/o/o2i2dnbou.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xma2v6a8z"/><path class="bha-fvb6w"/><path clip-rule="evenodd" class="o2i2dnbou"/></g>`,
		"fallback": "streamline-plump-color:beach-flat",
	});
}

export default Component;
