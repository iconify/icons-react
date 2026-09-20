import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlymt9bdv.css';
import '../../css/m/mfwm3ntrc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlymt9bdv"/><path class="mfwm3ntrc"/>`,
		"fallback": "temaki:crossing-markings-ladder",
	});
}

export default Component;
