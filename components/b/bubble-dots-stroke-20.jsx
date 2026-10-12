import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aui9c_vuc.css';
import '../../css/b/bmmy7ztjn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aui9c_vuc"/><path class="bmmy7ztjn"/>`,
		"fallback": "garden:bubble-dots-stroke-20",
	});
}

export default Component;
