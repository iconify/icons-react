import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-f9gnybm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-f9gnybm"/>`,
		"fallback": "famicons:git-network-sharp",
	});
}

export default Component;
