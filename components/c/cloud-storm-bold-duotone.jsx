import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf0olab_z.css';
import '../../css/e/ejx2y1bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zf0olab_z"/><path class="ejx2y1bzf"/>`,
		"fallback": "solar:cloud-storm-bold-duotone",
	});
}

export default Component;
