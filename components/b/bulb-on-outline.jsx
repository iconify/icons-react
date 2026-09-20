import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj1g08qrn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj1g08qrn"/>`,
		"fallback": "teenyicons:bulb-on-outline",
	});
}

export default Component;
