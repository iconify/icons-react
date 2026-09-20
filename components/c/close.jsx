import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olzr79b3d.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olzr79b3d"/>`,
		"fallback": "lineicons:close",
	});
}

export default Component;
