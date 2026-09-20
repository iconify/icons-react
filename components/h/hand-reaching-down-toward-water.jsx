import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux74nnriu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux74nnriu"/>`,
		"fallback": "pinhead:hand-reaching-down-toward-water",
	});
}

export default Component;
