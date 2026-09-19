import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tugnq-b6d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tugnq-b6d"/>`,
		"fallback": "dinkie-icons:black-circle-for-record-filled",
	});
}

export default Component;
