import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctxfvynty.css';
import '../../css/o/oyow42bcu.css';
import '../../css/q/q4qbprqxh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctxfvynty"/><path class="oyow42bcu"/><path class="q4qbprqxh"/>`,
		"fallback": "energy-icons:flood-defence-48-bold",
	});
}

export default Component;
