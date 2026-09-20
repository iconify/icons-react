import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdme6km3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kdme6km3m"/>`,
		"fallback": "lucide:circle-small",
	});
}

export default Component;
