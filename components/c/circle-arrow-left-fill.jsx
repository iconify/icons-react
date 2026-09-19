import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd738jbpu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sd738jbpu"/>`,
		"fallback": "gravity-ui:circle-arrow-left-fill",
	});
}

export default Component;
