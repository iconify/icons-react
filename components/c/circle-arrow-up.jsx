import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrsim2bww.css';
import '../../css/h/h7jt2xa4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k yrsim2bww"/><path class="h7jt2xa4c wm-a"/>`,
		"fallback": "withicons-bauhaus:circle-arrow-up",
	});
}

export default Component;
