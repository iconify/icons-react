import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtdx1lb8q.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtdx1lb8q"/>`,
		"fallback": "fa6-brands:creative-commons-nc-eu",
	});
}

export default Component;
