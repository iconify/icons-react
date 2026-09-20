import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v54shr-2w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v54shr-2w"/>`,
		"fallback": "pinhead:daisy",
	});
}

export default Component;
