import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxtm55b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxtm55b3j"/>`,
		"fallback": "coolicons:circle-info-fill-round",
	});
}

export default Component;
