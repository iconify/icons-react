import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zor06vbkg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zor06vbkg"/>`,
		"fallback": "heroicons:bars-arrow-down-16-solid",
	});
}

export default Component;
