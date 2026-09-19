import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5p4vbcgg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5p4vbcgg"/>`,
		"fallback": "garden:check-double-fill-16",
	});
}

export default Component;
