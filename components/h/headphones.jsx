import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tklhe1yht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tklhe1yht"/>`,
		"fallback": "uil:headphones",
	});
}

export default Component;
