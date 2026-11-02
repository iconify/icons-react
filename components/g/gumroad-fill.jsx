import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm5l7hf7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm5l7hf7s"/>`,
		"fallback": "mingcute:gumroad-fill",
	});
}

export default Component;
