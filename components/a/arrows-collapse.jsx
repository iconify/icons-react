import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dje1_sblw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dje1_sblw"/>`,
		"fallback": "bi:arrows-collapse",
	});
}

export default Component;
