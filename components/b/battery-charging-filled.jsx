import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku9hb1yoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku9hb1yoa"/>`,
		"fallback": "reicon:battery-charging-filled",
	});
}

export default Component;
