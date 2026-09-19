import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mud64e42d.css';
import '../../css/t/tie6em3rc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="mud64e42d"/><path class="tie6em3rc"/></g>`,
		"fallback": "cryptocurrency-color:clam",
	});
}

export default Component;
