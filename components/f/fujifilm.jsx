import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qln9wxq_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qln9wxq_i"/>`,
		"fallback": "thesvg-color:fujifilm",
	});
}

export default Component;
