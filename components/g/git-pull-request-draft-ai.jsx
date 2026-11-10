import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep46uqbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep46uqbcs"/>`,
		"fallback": "tabler:git-pull-request-draft-ai",
	});
}

export default Component;
