import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mj4a88b0u.css';
import '../../css/v/vsr6o6bqu.css';
import '../../css/d/d7rrlf06l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mj4a88b0u"/><path clip-rule="evenodd" class="vsr6o6bqu"/><path class="d7rrlf06l"/></g>`,
		"fallback": "streamline-plump-color:book-1-flat",
	});
}

export default Component;
