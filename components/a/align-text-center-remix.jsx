import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2fdeh9wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2fdeh9wd"/>`,
		"fallback": "streamline-sharp:align-text-center-remix",
	});
}

export default Component;
