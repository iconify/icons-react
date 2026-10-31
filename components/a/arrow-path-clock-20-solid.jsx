import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7betk-dh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b7betk-dh"/>`,
		"fallback": "sidekickicons:arrow-path-clock-20-solid",
	});
}

export default Component;
