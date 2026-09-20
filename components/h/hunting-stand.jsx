import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj213xnnz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj213xnnz"/>`,
		"fallback": "roentgen:hunting-stand",
	});
}

export default Component;
