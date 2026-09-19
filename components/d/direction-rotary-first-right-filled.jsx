import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6qay1xjw.css';
import '../../css/q/qutfy0qah.css';
import '../../css/y/yj4j86lvy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6qay1xjw"/><path class="qutfy0qah"/><path class="yj4j86lvy"/>`,
		"fallback": "carbon:direction-rotary-first-right-filled",
	});
}

export default Component;
