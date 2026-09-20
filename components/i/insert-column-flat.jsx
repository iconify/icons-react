import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_wjawb5e.css';
import '../../css/j/jpll76e1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i_wjawb5e"/><path class="jpll76e1t"/></g>`,
		"fallback": "streamline-plump-color:insert-column-flat",
	});
}

export default Component;
