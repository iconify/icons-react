import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt_4qobzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt_4qobzi"/>`,
		"fallback": "tabler:arrow-iteration",
	});
}

export default Component;
