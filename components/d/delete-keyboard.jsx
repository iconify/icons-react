import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j9e3e3d4k.css';
import '../../css/z/ztlja6dve.css';
import '../../css/q/qhe5g9b1p.css';
import '../../css/u/uc9om7bwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="j9e3e3d4k"/><path class="ztlja6dve"/><path class="qhe5g9b1p"/><path class="uc9om7bwe"/></g>`,
		"fallback": "streamline-plump-color:delete-keyboard",
	});
}

export default Component;
