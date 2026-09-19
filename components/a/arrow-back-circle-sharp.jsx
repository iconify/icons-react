import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_pfwqd_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_pfwqd_s"/>`,
		"fallback": "famicons:arrow-back-circle-sharp",
	});
}

export default Component;
