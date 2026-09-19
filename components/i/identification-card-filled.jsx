import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn6id4c6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn6id4c6i"/>`,
		"fallback": "griddy-icons:identification-card-filled",
	});
}

export default Component;
