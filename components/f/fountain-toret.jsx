import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5m6s7ndc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5m6s7ndc"/>`,
		"fallback": "roentgen:fountain-toret",
	});
}

export default Component;
