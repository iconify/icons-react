import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgk16pb_t.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgk16pb_t"/>`,
		"fallback": "maki:fire-station-jp-11",
	});
}

export default Component;
