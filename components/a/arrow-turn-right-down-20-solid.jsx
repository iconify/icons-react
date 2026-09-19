import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqxmgob4i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fqxmgob4i"/>`,
		"fallback": "heroicons:arrow-turn-right-down-20-solid",
	});
}

export default Component;
