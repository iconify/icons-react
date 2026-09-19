import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b0a1sv-ez.css';
import '../../css/m/mdozgxbod.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="b0a1sv-ez"/><path class="mdozgxbod"/></g>`,
		"fallback": "cryptocurrency-color:dgb",
	});
}

export default Component;
