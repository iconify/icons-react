import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi16_abqf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gi16_abqf"/>`,
		"fallback": "gravity-ui:chart-pie",
	});
}

export default Component;
