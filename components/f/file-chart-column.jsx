import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2scli3dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2scli3dm"/>`,
		"fallback": "vadivam:file-chart-column",
	});
}

export default Component;
