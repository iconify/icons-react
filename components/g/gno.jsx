import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ef0lowbry.css';
import '../../css/r/rhyfo9b4d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ef0lowbry"/><path class="rhyfo9b4d"/></g>`,
		"fallback": "cryptocurrency-color:gno",
	});
}

export default Component;
