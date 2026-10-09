import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or3w-hr2p.css';
import '../../css/i/i5nzyoqoz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or3w-hr2p"/><path class="i5nzyoqoz"/>`,
		"fallback": "energy-icons:connector-nacs-20",
	});
}

export default Component;
