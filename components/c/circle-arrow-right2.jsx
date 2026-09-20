import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcc4oqbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gcc4oqbhd"/>`,
		"fallback": "reicon:circle-arrow-right2",
	});
}

export default Component;
