import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbku26h_w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tbku26h_w"/>`,
		"fallback": "gravity-ui:circle-arrow-down",
	});
}

export default Component;
