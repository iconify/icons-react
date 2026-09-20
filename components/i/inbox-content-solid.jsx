import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc0t97b9h.css';
import '../../css/d/do2f6-r1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jc0t97b9h"/><path class="do2f6-r1z"/>`,
		"fallback": "streamline-plump:inbox-content-solid",
	});
}

export default Component;
