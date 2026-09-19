import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si5ky56_s.css';
import '../../css/w/w-1mownrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si5ky56_s"/><path class="w-1mownrb"/>`,
		"fallback": "fontisto:blood-test",
	});
}

export default Component;
