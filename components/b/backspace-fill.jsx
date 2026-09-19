import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bua8ano9t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bua8ano9t"/>`,
		"fallback": "bi:backspace-fill",
	});
}

export default Component;
