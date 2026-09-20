import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l24qumafs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l24qumafs"/>`,
		"fallback": "temaki:board-train-diesel",
	});
}

export default Component;
