import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcpvqfk3h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pcpvqfk3h"/>`,
		"fallback": "sidekickicons:arrow-uturn-down-right-20-solid",
	});
}

export default Component;
