import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thankj98l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thankj98l"/>`,
		"fallback": "tabler:chevron-compact-left",
	});
}

export default Component;
