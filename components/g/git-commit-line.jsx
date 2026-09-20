import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itz2mac9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itz2mac9q"/>`,
		"fallback": "ri:git-commit-line",
	});
}

export default Component;
