import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsa27y-9e.css';
import '../../css/v/vvve78bba.css';
import '../../css/u/uzl62cwjb.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsa27y-9e"/><path class="vvve78bba"/><path class="uzl62cwjb"/>`,
		"fallback": "tabler-flags:cambodia",
	});
}

export default Component;
