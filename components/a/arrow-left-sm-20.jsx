import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auo9mbc2n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auo9mbc2n"/>`,
		"fallback": "garden:arrow-left-sm-20",
	});
}

export default Component;
