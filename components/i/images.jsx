import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utpg_nbcw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utpg_nbcw"/>`,
		"fallback": "fa7-solid:images",
	});
}

export default Component;
