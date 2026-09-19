import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzc2ysb5j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzc2ysb5j"/>`,
		"fallback": "dinkie-icons:astonished-face",
	});
}

export default Component;
