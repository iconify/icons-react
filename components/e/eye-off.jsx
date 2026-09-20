import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcz8zhbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bcz8zhbfk"/>`,
		"fallback": "reicon:eye-off",
	});
}

export default Component;
