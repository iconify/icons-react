import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7a1ozy4i.css';
import '../../css/l/l14j49bsm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a7a1ozy4i"/><path class="l14j49bsm"/></g>`,
		"fallback": "streamline-plump-color:charging-flat",
	});
}

export default Component;
