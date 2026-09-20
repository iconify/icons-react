import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh1ch4dcq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh1ch4dcq"/>`,
		"fallback": "pinhead:eighth-notes",
	});
}

export default Component;
