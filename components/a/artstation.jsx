import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhz-90b4r.css';
import '../../css/u/udf7n_b4p.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhz-90b4r"/><path class="udf7n_b4p"/>`,
		"fallback": "openmoji:artstation",
	});
}

export default Component;
