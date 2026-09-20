import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6w2vth6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6w2vth6n"/>`,
		"fallback": "vadivam:corner-right-down",
	});
}

export default Component;
