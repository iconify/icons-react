import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyt-ygblt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyt-ygblt"/>`,
		"fallback": "f7:circle-bottomthird-split",
	});
}

export default Component;
