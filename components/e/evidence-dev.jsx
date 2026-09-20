import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozo9kkyme.css';

const viewBox = {"width":1080,"height":1080};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozo9kkyme"/>`,
		"fallback": "thesvg-color:evidence-dev",
	});
}

export default Component;
