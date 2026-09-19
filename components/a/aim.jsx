import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz4gnyzmc.css';

const viewBox = {"width":569,"height":694};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz4gnyzmc"/>`,
		"fallback": "ls:aim",
	});
}

export default Component;
