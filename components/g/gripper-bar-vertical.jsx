import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq4fs4big.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq4fs4big"/>`,
		"fallback": "fluent-mdl2:gripper-bar-vertical",
	});
}

export default Component;
