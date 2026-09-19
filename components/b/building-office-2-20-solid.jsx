import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byuv76u1m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="byuv76u1m"/>`,
		"fallback": "heroicons:building-office-2-20-solid",
	});
}

export default Component;
