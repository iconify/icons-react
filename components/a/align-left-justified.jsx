import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u96qf2b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u96qf2b8z"/>`,
		"fallback": "tabler:align-left-justified",
	});
}

export default Component;
