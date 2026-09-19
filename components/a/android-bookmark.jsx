import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nas3ou1jb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nas3ou1jb"/>`,
		"fallback": "ion:android-bookmark",
	});
}

export default Component;
