import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhzo-tp2a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xhzo-tp2a"/>`,
		"fallback": "sidekickicons:headphones-20-solid",
	});
}

export default Component;
