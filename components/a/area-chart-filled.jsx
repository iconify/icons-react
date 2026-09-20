import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7y--t7eo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a7y--t7eo"/>`,
		"fallback": "lsicon:area-chart-filled",
	});
}

export default Component;
