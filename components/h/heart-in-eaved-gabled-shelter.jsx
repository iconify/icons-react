import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-k6ywuma.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-k6ywuma"/>`,
		"fallback": "pinhead:heart-in-eaved-gabled-shelter",
	});
}

export default Component;
