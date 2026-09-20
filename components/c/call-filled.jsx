import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxl0p-bhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxl0p-bhp"/>`,
		"fallback": "reicon:call-filled",
	});
}

export default Component;
