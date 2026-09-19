import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkpmdpl1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkpmdpl1n"/>`,
		"fallback": "basil:arrow-right-solid",
	});
}

export default Component;
