import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iok19yqca.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iok19yqca"/>`,
		"fallback": "bi:filter-right",
	});
}

export default Component;
