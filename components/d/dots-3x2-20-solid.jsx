import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5lckz1mb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m5lckz1mb"/>`,
		"fallback": "sidekickicons:dots-3x2-20-solid",
	});
}

export default Component;
