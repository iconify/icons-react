import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn5ia6wrr.css';

const viewBox = {"width":496,"height":504};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn5ia6wrr"/>`,
		"fallback": "ps:cpu",
	});
}

export default Component;
