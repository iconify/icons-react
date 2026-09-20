import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0778o7nd.css';
import '../../css/q/qfa4njwpy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0778o7nd"/><path class="qfa4njwpy"/></g>`,
		"fallback": "streamline-plump-color:delete-bookmark-flat",
	});
}

export default Component;
