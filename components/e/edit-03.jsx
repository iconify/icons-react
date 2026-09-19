import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oog5nub2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oog5nub2g"/>`,
		"fallback": "hugeicons:edit-03",
	});
}

export default Component;
