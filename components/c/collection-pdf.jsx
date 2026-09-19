import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uii94qbbv.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uii94qbbv"/>`,
		"fallback": "zmdi:collection-pdf",
	});
}

export default Component;
