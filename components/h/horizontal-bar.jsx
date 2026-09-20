import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfw4b_blv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfw4b_blv"/>`,
		"fallback": "pinhead:horizontal-bar",
	});
}

export default Component;
