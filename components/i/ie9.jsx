import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa_orb6l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqa_orb6l"/>`,
		"fallback": "raphael:ie9",
	});
}

export default Component;
