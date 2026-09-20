import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3wuugj7j.css';
import '../../css/q/q3937pswf.css';
import '../../css/e/e-rcbkuot.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3wuugj7j"/><path class="q3937pswf"/><path class="e-rcbkuot"/>`,
		"fallback": "temaki:cable-device",
	});
}

export default Component;
