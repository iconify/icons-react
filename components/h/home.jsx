import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gby97qwzt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gby97qwzt"/>`,
		"fallback": "radix-icons:home",
	});
}

export default Component;
