import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avy81kbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avy81kbhu"/>`,
		"fallback": "ri:github-line",
	});
}

export default Component;
