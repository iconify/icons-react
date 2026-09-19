import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck65vcc4j.css';

const viewBox = {"width":416,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck65vcc4j"/>`,
		"fallback": "file-icons:fauna",
	});
}

export default Component;
