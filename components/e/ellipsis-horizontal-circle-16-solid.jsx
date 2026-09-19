import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atomtfbfh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="atomtfbfh"/>`,
		"fallback": "heroicons:ellipsis-horizontal-circle-16-solid",
	});
}

export default Component;
