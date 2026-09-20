import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8f-lov2i.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8f-lov2i"/>`,
		"fallback": "maki:fire-station-11",
	});
}

export default Component;
