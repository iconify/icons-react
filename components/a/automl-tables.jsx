import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8wg0cc7n.css';
import '../../css/r/r_s901bbt.css';
import '../../css/y/yp1ozz1bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8wg0cc7n"/><path class="r_s901bbt"/><path class="yp1ozz1bu"/>`,
		"fallback": "gcp:automl-tables",
	});
}

export default Component;
