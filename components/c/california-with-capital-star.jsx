import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdi6qtbmf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdi6qtbmf"/>`,
		"fallback": "pinhead:california-with-capital-star",
	});
}

export default Component;
