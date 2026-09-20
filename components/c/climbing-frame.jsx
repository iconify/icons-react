import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi64kac_w.css';
import '../../css/s/sup9bkb8w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi64kac_w"/><path class="sup9bkb8w"/>`,
		"fallback": "temaki:climbing-frame",
	});
}

export default Component;
