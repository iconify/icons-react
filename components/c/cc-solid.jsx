import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2u1s5b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s2u1s5b4i"/>`,
		"fallback": "sidekickicons:cc-solid",
	});
}

export default Component;
