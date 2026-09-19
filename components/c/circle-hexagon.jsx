import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4yh9sqql.css';
import '../../css/a/aps6ewwol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b x4yh9sqql"/><path class="aps6ewwol b"/>`,
		"fallback": "boxicons:circle-hexagon",
	});
}

export default Component;
