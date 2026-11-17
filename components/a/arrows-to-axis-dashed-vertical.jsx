import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhqm7bb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhqm7bb4l"/>`,
		"fallback": "lucide:arrows-to-axis-dashed-vertical",
	});
}

export default Component;
