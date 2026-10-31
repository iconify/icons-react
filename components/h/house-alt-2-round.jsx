import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjpct4_2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjpct4_2a"/>`,
		"fallback": "coolicons:house-alt-2-round",
	});
}

export default Component;
