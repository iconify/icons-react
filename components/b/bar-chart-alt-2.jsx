import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rew8143lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rew8143lt"/>`,
		"fallback": "bxs:bar-chart-alt-2",
	});
}

export default Component;
