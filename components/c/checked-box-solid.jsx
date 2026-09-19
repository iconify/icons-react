import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok-0j3bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok-0j3bcs"/>`,
		"fallback": "basil:checked-box-solid",
	});
}

export default Component;
