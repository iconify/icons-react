import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1uee2bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1uee2bxu"/>`,
		"fallback": "coolicons:git-pull-request-draft-round",
	});
}

export default Component;
