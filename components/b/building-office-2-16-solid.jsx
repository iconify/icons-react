import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mau6vrbeu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mau6vrbeu"/>`,
		"fallback": "heroicons:building-office-2-16-solid",
	});
}

export default Component;
