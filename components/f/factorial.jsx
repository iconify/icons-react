import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5zwpxb5i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5zwpxb5i"/>`,
		"fallback": "streamline-color:factorial",
	});
}

export default Component;
