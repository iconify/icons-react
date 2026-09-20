import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi_56x-la.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi_56x-la"/>`,
		"fallback": "pinhead:eyebrow-and-eyelashes",
	});
}

export default Component;
