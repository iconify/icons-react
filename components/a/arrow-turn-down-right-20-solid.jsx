import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr05f2bdb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nr05f2bdb"/>`,
		"fallback": "heroicons:arrow-turn-down-right-20-solid",
	});
}

export default Component;
