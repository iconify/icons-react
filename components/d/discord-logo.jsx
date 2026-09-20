import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wanl34gha.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wanl34gha"/>`,
		"fallback": "radix-icons:discord-logo",
	});
}

export default Component;
