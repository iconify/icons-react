import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn4d29b0g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bn4d29b0g"/>`,
		"fallback": "heroicons:arrow-turn-left-up-20-solid",
	});
}

export default Component;
