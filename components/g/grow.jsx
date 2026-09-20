import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqo-n47ib.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqo-n47ib"/>`,
		"fallback": "lineicons:grow",
	});
}

export default Component;
