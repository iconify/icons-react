import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oizttghub.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oizttghub"/>`,
		"fallback": "pinhead:3-above-water",
	});
}

export default Component;
