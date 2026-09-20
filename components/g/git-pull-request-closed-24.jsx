import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u89qm5-sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u89qm5-sh"/>`,
		"fallback": "octicon:git-pull-request-closed-24",
	});
}

export default Component;
