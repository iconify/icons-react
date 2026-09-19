import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldz_qwb2h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldz_qwb2h"/>`,
		"fallback": "bi:arrow-bar-right",
	});
}

export default Component;
