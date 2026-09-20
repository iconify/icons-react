import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q424dk6fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q424dk6fz"/>`,
		"fallback": "thesvg:hatena-bookmark",
	});
}

export default Component;
