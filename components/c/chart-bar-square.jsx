import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7103_b_r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7103_b_r"/>`,
		"fallback": "f7:chart-bar-square",
	});
}

export default Component;
