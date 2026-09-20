import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huc_edb4u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huc_edb4u"/>`,
		"fallback": "pinhead:indiana-with-capital-star",
	});
}

export default Component;
