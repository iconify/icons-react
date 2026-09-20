import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjti-ug9m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjti-ug9m"/>`,
		"fallback": "pinhead:badminton-racket",
	});
}

export default Component;
