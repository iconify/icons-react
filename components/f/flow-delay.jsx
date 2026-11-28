import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs1_ig4jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs1_ig4jg"/>`,
		"fallback": "iconaut:flow-delay",
	});
}

export default Component;
