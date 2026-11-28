import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o62p6rbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o62p6rbou"/>`,
		"fallback": "noviair:bottle",
	});
}

export default Component;
