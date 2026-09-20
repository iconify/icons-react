import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-yalvqiy.css';
import '../../css/k/kj3mfibmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-yalvqiy"/><path class="kj3mfibmj"/>`,
		"fallback": "token:ait",
	});
}

export default Component;
