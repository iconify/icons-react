import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyh-ry88k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vyh-ry88k"/>`,
		"fallback": "heroicons:chevron-up-down-16-solid",
	});
}

export default Component;
