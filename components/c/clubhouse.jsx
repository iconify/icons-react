import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1-_flbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1-_flbpw"/>`,
		"fallback": "griddy-icons:clubhouse",
	});
}

export default Component;
