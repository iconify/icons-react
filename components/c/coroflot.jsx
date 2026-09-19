import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nybji0bvn.css';

const viewBox = {"width":400,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nybji0bvn"/>`,
		"fallback": "ps:coroflot",
	});
}

export default Component;
