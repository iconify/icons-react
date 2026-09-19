import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6u424bun.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6u424bun"/>`,
		"fallback": "f7:arrow-up-circle-fill",
	});
}

export default Component;
