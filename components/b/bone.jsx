import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl1-zyvbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl1-zyvbv"/>`,
		"fallback": "tabler:bone",
	});
}

export default Component;
