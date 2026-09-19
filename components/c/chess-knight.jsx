import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbl0ijbjl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbl0ijbjl"/>`,
		"fallback": "at-icons:chess-knight",
	});
}

export default Component;
