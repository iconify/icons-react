import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jea36wsph.css';
import '../../css/t/tep7rtb5a.css';

const viewBox = {"width":800,"height":156,"top":316.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jea36wsph"/><path class="tep7rtb5a"/>`,
		"fallback": "thesvg-color:anadolujet",
	});
}

export default Component;
