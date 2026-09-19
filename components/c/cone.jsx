import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiw2f8g6s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiw2f8g6s"/>`,
		"fallback": "at-icons:cone",
	});
}

export default Component;
