import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/p/pyne1kb6h.css';
import '../../css/u/u3ek8-bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="pyne1kb6h"/><path class="u3ek8-bwh"/>`,
		"fallback": "solar:check-read-bold-duotone",
	});
}

export default Component;
