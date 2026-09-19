import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap5cqxbrg.css';
import '../../css/w/wzyv4j1bt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap5cqxbrg"/><path class="wzyv4j1bt"/>`,
		"fallback": "carbon:add-filled",
	});
}

export default Component;
