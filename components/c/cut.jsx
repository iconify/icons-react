import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qogpt6bsd.css';
import '../../css/t/txanzxb9i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path clip-rule="evenodd" class="qogpt6bsd"/><path class="txanzxb9i"/></g>`,
		"fallback": "streamline-plump-color:cut",
	});
}

export default Component;
