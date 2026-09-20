import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2xuxdarr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2xuxdarr"/>`,
		"fallback": "tabler:arrow-up-left",
	});
}

export default Component;
