import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esle7_bpk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esle7_bpk"/>`,
		"fallback": "fa-solid:heartbeat",
	});
}

export default Component;
