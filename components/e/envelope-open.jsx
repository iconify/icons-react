import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/int9g14to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="int9g14to"/>`,
		"fallback": "reicon:envelope-open",
	});
}

export default Component;
