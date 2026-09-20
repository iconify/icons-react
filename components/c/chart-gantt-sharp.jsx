import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7z4q6b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7z4q6b3n"/>`,
		"fallback": "keyline-icons:chart-gantt-sharp",
	});
}

export default Component;
