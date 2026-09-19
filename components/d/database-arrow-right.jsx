import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvnb4t_-w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kvnb4t_-w"/>`,
		"fallback": "gravity-ui:database-arrow-right",
	});
}

export default Component;
