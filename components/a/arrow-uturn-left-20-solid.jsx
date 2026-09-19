import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-zzssbkn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-zzssbkn"/>`,
		"fallback": "heroicons:arrow-uturn-left-20-solid",
	});
}

export default Component;
