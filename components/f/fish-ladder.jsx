import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5rwgpn5g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5rwgpn5g"/>`,
		"fallback": "temaki:fish-ladder",
	});
}

export default Component;
