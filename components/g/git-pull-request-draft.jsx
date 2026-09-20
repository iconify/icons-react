import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgtn0cb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgtn0cb4e"/>`,
		"fallback": "tabler:git-pull-request-draft",
	});
}

export default Component;
