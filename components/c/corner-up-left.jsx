import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpd133fzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpd133fzc"/>`,
		"fallback": "tabler:corner-up-left",
	});
}

export default Component;
