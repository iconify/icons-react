import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcq1h3pnv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcq1h3pnv"/>`,
		"fallback": "bi:app",
	});
}

export default Component;
