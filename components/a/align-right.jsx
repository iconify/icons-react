import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/n3rld-six.css';
import '../../css/a/ani7f3b7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="n3rld-six"/><path class="ani7f3b7w"/></g>`,
		"fallback": "streamline-plump-color:align-right",
	});
}

export default Component;
