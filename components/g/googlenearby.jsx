import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz3pnrlyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz3pnrlyu"/>`,
		"fallback": "simple-icons:googlenearby",
	});
}

export default Component;
