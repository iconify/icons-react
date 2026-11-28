import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpzqbecjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpzqbecjl primary"/>`,
		"fallback": "iconaut:arrow-right-duotone",
	});
}

export default Component;
