import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe5_628xb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe5_628xb"/>`,
		"fallback": "bi:file-earmark-fill",
	});
}

export default Component;
