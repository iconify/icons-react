import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e76g5pbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e76g5pbeg"/>`,
		"fallback": "vadivam:file-chart-column",
	});
}

export default Component;
