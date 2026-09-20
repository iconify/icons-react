import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zys39uvkh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zys39uvkh"/>`,
		"fallback": "qlementine-icons:flatten-16",
	});
}

export default Component;
