import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zen96loip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zen96loip"/>`,
		"fallback": "cbi:10-play",
	});
}

export default Component;
