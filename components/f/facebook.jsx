import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgjnt5bfz.css';
import '../../css/y/y08ndqbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgjnt5bfz"/><path class="y08ndqbqd"/>`,
		"fallback": "uim:facebook",
	});
}

export default Component;
