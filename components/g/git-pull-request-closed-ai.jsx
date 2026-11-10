import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lavxv1b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lavxv1b0h"/>`,
		"fallback": "tabler:git-pull-request-closed-ai",
	});
}

export default Component;
