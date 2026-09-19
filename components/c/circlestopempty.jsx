import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpmpq7j_v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpmpq7j_v"/>`,
		"fallback": "whh:circlestopempty",
	});
}

export default Component;
