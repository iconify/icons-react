import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-7w2z-xw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-7w2z-xw"/>`,
		"fallback": "rivet-icons:globe-solid",
	});
}

export default Component;
