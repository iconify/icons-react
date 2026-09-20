import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxc4urb0d.css';
import '../../css/g/gks8du_si.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxc4urb0d"/><path class="gks8du_si"/>`,
		"fallback": "pixel:check-box",
	});
}

export default Component;
