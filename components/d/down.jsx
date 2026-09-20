import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynj2_0btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynj2_0btn"/>`,
		"fallback": "lets-icons:down",
	});
}

export default Component;
