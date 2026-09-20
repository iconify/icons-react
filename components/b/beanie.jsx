import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqd_v-g0b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqd_v-g0b"/>`,
		"fallback": "streamline:beanie",
	});
}

export default Component;
