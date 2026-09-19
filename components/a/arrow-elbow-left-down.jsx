import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjah4orxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zjah4orxl"/>`,
		"fallback": "griddy-icons:arrow-elbow-left-down",
	});
}

export default Component;
