import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oabydjbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oabydjbaq"/>`,
		"fallback": "octicon:discussion-outdated-24",
	});
}

export default Component;
