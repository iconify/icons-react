import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqdkc20cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqdkc20cg"/>`,
		"fallback": "thesvg-color:eagle",
	});
}

export default Component;
