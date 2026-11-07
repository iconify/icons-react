import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzgij3q9i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wzgij3q9i"/>`,
		"fallback": "sidekickicons:fork-knife-20-solid",
	});
}

export default Component;
