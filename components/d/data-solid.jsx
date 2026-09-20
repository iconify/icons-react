import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/equdfwqlp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="equdfwqlp"/>`,
		"fallback": "rivet-icons:data-solid",
	});
}

export default Component;
