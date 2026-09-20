import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqvkq1msn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqvkq1msn"/>`,
		"fallback": "ri:git-pr-draft-fill",
	});
}

export default Component;
