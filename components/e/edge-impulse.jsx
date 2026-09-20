import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utf5gactz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utf5gactz"/>`,
		"fallback": "thesvg:edge-impulse",
	});
}

export default Component;
