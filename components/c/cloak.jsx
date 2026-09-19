import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l9uus62wr.css';
import '../../css/r/r8w5yjbct.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="l9uus62wr"/><path class="r8w5yjbct"/></g>`,
		"fallback": "cryptocurrency-color:cloak",
	});
}

export default Component;
