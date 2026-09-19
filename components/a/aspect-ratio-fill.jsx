import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi_3ok_fv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi_3ok_fv"/>`,
		"fallback": "bi:aspect-ratio-fill",
	});
}

export default Component;
