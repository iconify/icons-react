import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfxdh1bjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfxdh1bjz"/>`,
		"fallback": "coolicons:house-alt-1-duocolor-round",
	});
}

export default Component;
