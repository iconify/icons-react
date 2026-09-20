import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etn01zbmq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etn01zbmq"/>`,
		"fallback": "ix:circle-stop-filled",
	});
}

export default Component;
