import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhae88n8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhae88n8p"/>`,
		"fallback": "noviair:bird-heart",
	});
}

export default Component;
