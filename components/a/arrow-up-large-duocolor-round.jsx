import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhv2vsb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhv2vsb9k"/>`,
		"fallback": "coolicons:arrow-up-large-duocolor-round",
	});
}

export default Component;
