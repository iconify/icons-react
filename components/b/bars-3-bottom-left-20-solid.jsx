import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3j-ezfuj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m3j-ezfuj"/>`,
		"fallback": "heroicons:bars-3-bottom-left-20-solid",
	});
}

export default Component;
