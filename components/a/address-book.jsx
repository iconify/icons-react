import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd8fe119i.css';
import '../../css/q/qk5s2wd5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd8fe119i"/><path class="qk5s2wd5m"/>`,
		"fallback": "cil:address-book",
	});
}

export default Component;
