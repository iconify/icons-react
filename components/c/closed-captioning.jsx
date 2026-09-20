import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_l_wdbml.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_l_wdbml"/>`,
		"fallback": "map:closed-captioning",
	});
}

export default Component;
