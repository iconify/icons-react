import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ct7fbgs.css';
import '../../css/z/z5f1jwb5h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9ct7fbgs"/><path class="z5f1jwb5h"/>`,
		"fallback": "garden:cloud-arrow-down-stroke-20",
	});
}

export default Component;
