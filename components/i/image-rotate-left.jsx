import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_ixp2b7k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_ixp2b7k"/>`,
		"fallback": "dashicons:image-rotate-left",
	});
}

export default Component;
