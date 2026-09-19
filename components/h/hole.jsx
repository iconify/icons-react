import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njswg3bpu.css';
import '../../css/v/v_g5t0bgt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="njswg3bpu"/><path class="v_g5t0bgt"/>`,
		"fallback": "fxemoji:hole",
	});
}

export default Component;
