import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l59rj_b_d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l59rj_b_d"/>`,
		"fallback": "map:chairlift",
	});
}

export default Component;
