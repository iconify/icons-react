import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt893gged.css';
import '../../css/e/eg39dacou.css';
import '../../css/t/t6cvi7g9e.css';
import '../../css/g/g_kw6w86y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt893gged"/><path class="eg39dacou"/><path class="t6cvi7g9e"/><path class="g_kw6w86y"/>`,
		"fallback": "fxemoji:clock3thirty",
	});
}

export default Component;
