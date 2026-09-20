import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5k6jyb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5k6jyb8g"/>`,
		"fallback": "prime:github",
	});
}

export default Component;
