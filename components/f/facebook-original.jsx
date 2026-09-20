import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wayg92b3f.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wayg92b3f"/>`,
		"fallback": "lineicons:facebook-original",
	});
}

export default Component;
