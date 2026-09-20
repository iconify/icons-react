import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmgwdp74q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmgwdp74q"/>`,
		"fallback": "pinhead:groin",
	});
}

export default Component;
