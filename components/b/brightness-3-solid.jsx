import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3l_-nv0q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3l_-nv0q"/>`,
		"fallback": "streamline:brightness-3-solid",
	});
}

export default Component;
