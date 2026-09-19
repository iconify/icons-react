import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6j56zbsw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6j56zbsw"/>`,
		"fallback": "whh:circlep",
	});
}

export default Component;
