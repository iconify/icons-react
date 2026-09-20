import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5wn405-h.css';
import '../../css/b/bed8vacuq.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5wn405-h"/><path class="bed8vacuq"/>`,
		"fallback": "medical-icon:i-ambulance",
	});
}

export default Component;
