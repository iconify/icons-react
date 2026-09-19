import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs5tpe-zu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs5tpe-zu"/>`,
		"fallback": "f7:cloud-drizzle-fill",
	});
}

export default Component;
