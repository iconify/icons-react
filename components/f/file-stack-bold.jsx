import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n17jbjguw.css';
import '../../css/k/ka644-w1m.css';
import '../../css/n/nflgq1baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n17jbjguw"/><path class="ka644-w1m"/><path class="nflgq1baw"/>`,
		"fallback": "solar:file-stack-bold",
	});
}

export default Component;
