import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/web3leb9e.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="web3leb9e"/>`,
		"fallback": "dinkie-icons:black-square-for-stop-filled",
	});
}

export default Component;
