import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arp62jbme.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arp62jbme"/>`,
		"fallback": "nimbus:chevron-up",
	});
}

export default Component;
