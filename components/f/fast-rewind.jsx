import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqvt6ac-p.css';

const viewBox = {"width":376,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqvt6ac-p"/>`,
		"fallback": "zmdi:fast-rewind",
	});
}

export default Component;
