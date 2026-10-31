import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbqhn0p_l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cbqhn0p_l"/>`,
		"fallback": "sidekickicons:heading-20-solid",
	});
}

export default Component;
