import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8v-evrrq.css';
import '../../css/d/d9ypmmcan.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8v-evrrq"/><path class="d9ypmmcan"/>`,
		"fallback": "streamline-pixel:hand-awesome",
	});
}

export default Component;
