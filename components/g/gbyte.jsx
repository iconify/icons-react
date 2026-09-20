import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op3huwehw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op3huwehw"/>`,
		"fallback": "token:gbyte",
	});
}

export default Component;
