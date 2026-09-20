import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1t0m1bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1t0m1bqj"/>`,
		"fallback": "stash:corner-down-left",
	});
}

export default Component;
