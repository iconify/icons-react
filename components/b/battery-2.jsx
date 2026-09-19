import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncfo34pcr.css';

const viewBox = {"width":2304,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncfo34pcr"/>`,
		"fallback": "fa:battery-2",
	});
}

export default Component;
