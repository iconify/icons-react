import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaecykbpq.css';
import '../../css/c/cpwp98h5v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaecykbpq"/><path class="cpwp98h5v"/>`,
		"fallback": "carbon:error-outline",
	});
}

export default Component;
