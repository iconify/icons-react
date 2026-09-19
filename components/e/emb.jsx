import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tiltuibst.css';
import '../../css/q/qx0zhsv4j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="tiltuibst"/><path class="qx0zhsv4j"/></g>`,
		"fallback": "cryptocurrency-color:emb",
	});
}

export default Component;
