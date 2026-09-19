import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iutdj93oc.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iutdj93oc"/>`,
		"fallback": "zmdi:gamepad",
	});
}

export default Component;
