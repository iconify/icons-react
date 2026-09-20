import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q56sk_bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q56sk_bde"/>`,
		"fallback": "simple-icons:hurriyetemlak",
	});
}

export default Component;
