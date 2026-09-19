import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2zxfobyr.css';
import '../../css/q/q6ywlpbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2zxfobyr"/><path class="q6ywlpbtr"/>`,
		"fallback": "eva:eye-outline",
	});
}

export default Component;
