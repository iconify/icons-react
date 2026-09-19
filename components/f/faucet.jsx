import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inwz9eb2n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inwz9eb2n"/>`,
		"fallback": "fa7-solid:faucet",
	});
}

export default Component;
