import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j9wrs-0li.css';
import '../../css/j/j2dch6bnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j9wrs-0li"/><path class="j2dch6bnu"/></g>`,
		"fallback": "vadivam:chart-spline",
	});
}

export default Component;
