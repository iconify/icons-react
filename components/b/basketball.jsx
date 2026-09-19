import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiq6z9xnt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiq6z9xnt"/>`,
		"fallback": "famicons:basketball",
	});
}

export default Component;
