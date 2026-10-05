import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm0_39fsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm0_39fsv"/>`,
		"fallback": "matita:chevron-down",
	});
}

export default Component;
