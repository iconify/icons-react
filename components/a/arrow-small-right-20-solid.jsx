import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k58n_0uxa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k58n_0uxa"/>`,
		"fallback": "heroicons:arrow-small-right-20-solid",
	});
}

export default Component;
