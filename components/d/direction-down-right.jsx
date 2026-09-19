import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5362fbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5362fbqc"/>`,
		"fallback": "codex:direction-down-right",
	});
}

export default Component;
