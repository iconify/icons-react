import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuun5oelc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuun5oelc"/>`,
		"fallback": "ri:door-line",
	});
}

export default Component;
