import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf2tuil5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf2tuil5u"/>`,
		"fallback": "bi:arrows-collapse-vertical",
	});
}

export default Component;
