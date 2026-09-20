import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm_my446l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm_my446l"/>`,
		"fallback": "tabler:bulb-off",
	});
}

export default Component;
