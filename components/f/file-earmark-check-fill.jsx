import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0dei-bca.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0dei-bca"/>`,
		"fallback": "bi:file-earmark-check-fill",
	});
}

export default Component;
