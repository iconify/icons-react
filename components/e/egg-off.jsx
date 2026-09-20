import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk_gojgqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk_gojgqk"/>`,
		"fallback": "lucide:egg-off",
	});
}

export default Component;
