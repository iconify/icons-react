import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/i19_pfblm.css';
import '../../css/u/umwzrabax.css';
import '../../css/w/w-0n4zb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="i19_pfblm"/><path class="umwzrabax"/><path class="w-0n4zb8t"/></g>`,
		"fallback": "matita:git-commit-vertical",
	});
}

export default Component;
