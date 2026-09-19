import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvtzd3b0t.css';
import '../../css/l/llds493te.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="zvtzd3b0t"/><path class="llds493te"/>`,
		"fallback": "famicons:calendar-number-outline",
	});
}

export default Component;
