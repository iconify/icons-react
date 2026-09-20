import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk2jde1-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk2jde1-x"/>`,
		"fallback": "reicon:arrow-square-right-filled",
	});
}

export default Component;
