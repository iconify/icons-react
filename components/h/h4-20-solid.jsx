import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6vw2s0ka.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k6vw2s0ka"/>`,
		"fallback": "sidekickicons:h4-20-solid",
	});
}

export default Component;
