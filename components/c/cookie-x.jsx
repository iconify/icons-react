import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz24a0bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz24a0bqw"/>`,
		"fallback": "noviair:cookie-x",
	});
}

export default Component;
