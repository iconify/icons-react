import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwklj_a9v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xwklj_a9v"/>`,
		"fallback": "teenyicons:arrow-down-solid",
	});
}

export default Component;
