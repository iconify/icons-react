import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukw3-vb_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ukw3-vb_r"/>`,
		"fallback": "gravity-ui:circle-number-3-fill",
	});
}

export default Component;
