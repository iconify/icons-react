import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/smuapib-d.css';
import '../../css/u/uiscwxh7g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="smuapib-d"/><path class="uiscwxh7g"/></g>`,
		"fallback": "cryptocurrency-color:gbx",
	});
}

export default Component;
