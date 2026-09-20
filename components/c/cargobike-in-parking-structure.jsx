import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyb2kkmwc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyb2kkmwc"/>`,
		"fallback": "pinhead:cargobike-in-parking-structure",
	});
}

export default Component;
