import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqhbbhbtp.css';

const viewBox = {"width":998.296,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqhbbhbtp"/>`,
		"fallback": "brandico:deviantart",
	});
}

export default Component;
