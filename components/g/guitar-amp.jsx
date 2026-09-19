import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct8tf_ybb.css';
import '../../css/a/ar62u3ixi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct8tf_ybb"/><path class="ar62u3ixi"/>`,
		"fallback": "bxs:guitar-amp",
	});
}

export default Component;
