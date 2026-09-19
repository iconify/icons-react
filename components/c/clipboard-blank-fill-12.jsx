import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmb67ktsz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmb67ktsz"/>`,
		"fallback": "garden:clipboard-blank-fill-12",
	});
}

export default Component;
