import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je7ksxbfh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je7ksxbfh"/>`,
		"fallback": "icon-park-outline:collapse-text-input",
	});
}

export default Component;
