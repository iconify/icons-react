import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx9bq6bdu.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx9bq6bdu"/>`,
		"fallback": "lineicons:headphone",
	});
}

export default Component;
