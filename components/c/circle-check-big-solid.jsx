import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldcxc-d2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldcxc-d2b"/>`,
		"fallback": "withicons:circle-check-big-solid",
	});
}

export default Component;
