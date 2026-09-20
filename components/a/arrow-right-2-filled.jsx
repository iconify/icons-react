import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg_t2jbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg_t2jbru"/>`,
		"fallback": "reicon:arrow-right-2-filled",
	});
}

export default Component;
