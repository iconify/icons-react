import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owtso8eld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owtso8eld"/>`,
		"fallback": "cbi:creality-cfs",
	});
}

export default Component;
