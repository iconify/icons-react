import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rew9s1bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rew9s1bci"/>`,
		"fallback": "sidekickicons:arrow-path-clock",
	});
}

export default Component;
