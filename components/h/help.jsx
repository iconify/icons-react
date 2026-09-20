import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spcaiwx2r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spcaiwx2r"/>`,
		"fallback": "oui:help",
	});
}

export default Component;
