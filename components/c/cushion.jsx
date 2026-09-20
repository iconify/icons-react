import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of3dkvhwn.css';
import '../../css/v/vn6ed8z0m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of3dkvhwn"/><path class="vn6ed8z0m"/>`,
		"fallback": "temaki:cushion",
	});
}

export default Component;
