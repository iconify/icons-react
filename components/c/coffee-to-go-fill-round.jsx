import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlc46oq9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlc46oq9w"/>`,
		"fallback": "coolicons:coffee-to-go-fill-round",
	});
}

export default Component;
