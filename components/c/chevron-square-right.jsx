import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc0t7rxjs.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc0t7rxjs"/>`,
		"fallback": "jam:chevron-square-right",
	});
}

export default Component;
