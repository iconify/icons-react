import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsaxc_miu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsaxc_miu"/>`,
		"fallback": "noviair-light:ai-chip",
	});
}

export default Component;
