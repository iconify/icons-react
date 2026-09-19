import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf2zg36gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf2zg36gi"/>`,
		"fallback": "grommet-icons:bus",
	});
}

export default Component;
