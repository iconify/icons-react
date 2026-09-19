import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk-v_9b-g.css';

const viewBox = {"width":895,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk-v_9b-g"/>`,
		"fallback": "whh:concretefive",
	});
}

export default Component;
