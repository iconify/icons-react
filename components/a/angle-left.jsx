import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhffs66ym.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhffs66ym"/>`,
		"fallback": "fa7-solid:angle-left",
	});
}

export default Component;
