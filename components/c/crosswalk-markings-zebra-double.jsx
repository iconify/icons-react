import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqxfqybqv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqxfqybqv"/>`,
		"fallback": "pinhead:crosswalk-markings-zebra-double",
	});
}

export default Component;
