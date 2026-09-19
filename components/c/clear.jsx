import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsd9cfbck.css';

const viewBox = {"width":768,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsd9cfbck"/>`,
		"fallback": "ls:clear",
	});
}

export default Component;
