import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xi8rvi-ke.css';
import '../../css/c/c2ff4oy8r.css';
import '../../css/n/ncfen2bbt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xi8rvi-ke"/><path class="c2ff4oy8r"/><path clip-rule="evenodd" class="ncfen2bbt"/></g>`,
		"fallback": "streamline-plump-color:add-layer-2-flat",
	});
}

export default Component;
