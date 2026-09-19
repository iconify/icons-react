import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ril1flb_o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ril1flb_o"/>`,
		"fallback": "garden:circle-full-fill-16",
	});
}

export default Component;
