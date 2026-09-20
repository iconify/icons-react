import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9q_cmbkk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9q_cmbkk"/>`,
		"fallback": "oui:grab",
	});
}

export default Component;
