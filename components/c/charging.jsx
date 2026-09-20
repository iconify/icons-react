import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/uycvevb2b.css';
import '../../css/p/pk8cajbbu.css';
import '../../css/w/w0ywbtewy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="uycvevb2b"/><path class="pk8cajbbu"/><path class="w0ywbtewy"/></g>`,
		"fallback": "streamline-plump-color:charging",
	});
}

export default Component;
