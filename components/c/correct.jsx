import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at03s0y1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="at03s0y1z"/>`,
		"fallback": "icon-park:correct",
	});
}

export default Component;
