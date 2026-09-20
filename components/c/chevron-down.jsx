import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyd2g7b-t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyd2g7b-t"/>`,
		"fallback": "nimbus:chevron-down",
	});
}

export default Component;
