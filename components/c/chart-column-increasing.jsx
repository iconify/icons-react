import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3-5t2bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3-5t2bun"/>`,
		"fallback": "vadivam:chart-column-increasing",
	});
}

export default Component;
