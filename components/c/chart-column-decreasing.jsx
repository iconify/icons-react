import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcm_16b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcm_16b0o"/>`,
		"fallback": "vadivam:chart-column-decreasing",
	});
}

export default Component;
