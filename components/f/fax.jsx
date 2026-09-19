import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq5k6h_1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq5k6h_1d"/>`,
		"fallback": "fa-solid:fax",
	});
}

export default Component;
