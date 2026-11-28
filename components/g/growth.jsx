import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvq-8lb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvq-8lb_w"/>`,
		"fallback": "noviair:growth",
	});
}

export default Component;
