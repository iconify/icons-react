import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg5puvrns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hg5puvrns"/>`,
		"fallback": "streamline-logos:f-droid-logo-block",
	});
}

export default Component;
