import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiaghib3h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiaghib3h"/>`,
		"fallback": "pinhead:delaware-with-capital-star",
	});
}

export default Component;
