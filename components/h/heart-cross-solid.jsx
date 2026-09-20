import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcdp_lb8q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bcdp_lb8q"/>`,
		"fallback": "streamline-flex:heart-cross-solid",
	});
}

export default Component;
