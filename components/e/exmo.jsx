import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l066leb1a.css';
import '../../css/n/nzyxeshnx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="l066leb1a"/><path class="nzyxeshnx"/></g>`,
		"fallback": "cryptocurrency-color:exmo",
	});
}

export default Component;
