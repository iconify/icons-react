import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra2ozbcib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra2ozbcib"/>`,
		"fallback": "heroicons:cursor-arrow-rays-16-solid",
	});
}

export default Component;
