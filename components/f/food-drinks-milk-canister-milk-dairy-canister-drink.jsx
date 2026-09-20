import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeih55ecl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeih55ecl"/>`,
		"fallback": "streamline:food-drinks-milk-canister-milk-dairy-canister-drink",
	});
}

export default Component;
