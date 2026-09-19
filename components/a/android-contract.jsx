import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2t92_p2v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2t92_p2v"/>`,
		"fallback": "ion:android-contract",
	});
}

export default Component;
