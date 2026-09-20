import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4p_t1bdl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4p_t1bdl"/>`,
		"fallback": "pinhead:coughing-face-in-circle",
	});
}

export default Component;
