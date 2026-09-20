import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3ipj9r7w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3ipj9r7w"/>`,
		"fallback": "zondicons:duplicate",
	});
}

export default Component;
