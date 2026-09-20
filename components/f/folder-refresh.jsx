import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us0mlcc8v.css';
import '../../css/m/mb6i43i-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="us0mlcc8v"/><path class="mb6i43i-k"/>`,
		"fallback": "stash:folder-refresh",
	});
}

export default Component;
