import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seti1rq1s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seti1rq1s"/>`,
		"fallback": "whh:circleb",
	});
}

export default Component;
