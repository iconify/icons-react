import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uix0dubku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uix0dubku"/>`,
		"fallback": "thesvg:android-studio",
	});
}

export default Component;
