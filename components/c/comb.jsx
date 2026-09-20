import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckhx8tb2u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckhx8tb2u"/>`,
		"fallback": "pinhead:comb",
	});
}

export default Component;
