import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7f_wj1ds.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7f_wj1ds"/>`,
		"fallback": "selfhst:bazarr-light",
	});
}

export default Component;
