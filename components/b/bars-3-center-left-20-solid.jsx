import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh1flfbek.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bh1flfbek"/>`,
		"fallback": "heroicons:bars-3-center-left-20-solid",
	});
}

export default Component;
