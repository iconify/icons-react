import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omt14xb9d.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omt14xb9d"/>`,
		"fallback": "octicon:calendar",
	});
}

export default Component;
