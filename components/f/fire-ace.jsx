import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7m4u5b9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7m4u5b9w"/>`,
		"fallback": "game-icons:fire-ace",
	});
}

export default Component;
