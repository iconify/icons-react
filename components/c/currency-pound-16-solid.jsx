import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv-lpchyh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iv-lpchyh"/>`,
		"fallback": "heroicons:currency-pound-16-solid",
	});
}

export default Component;
