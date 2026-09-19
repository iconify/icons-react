import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zat6rqfwp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zat6rqfwp"/>`,
		"fallback": "whh:circlequora",
	});
}

export default Component;
