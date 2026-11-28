import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o687n4b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o687n4b_v"/>`,
		"fallback": "noviair:globe-x",
	});
}

export default Component;
