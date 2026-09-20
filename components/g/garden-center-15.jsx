import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekslbabri.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekslbabri"/>`,
		"fallback": "maki:garden-center-15",
	});
}

export default Component;
