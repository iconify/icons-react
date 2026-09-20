import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilj-16bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilj-16bfa"/>`,
		"fallback": "uit:arrow-circle-up",
	});
}

export default Component;
