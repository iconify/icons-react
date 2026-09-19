import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbp_y203a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbp_y203a"/>`,
		"fallback": "cib:azure-devops",
	});
}

export default Component;
