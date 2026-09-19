import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boz_pggbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boz_pggbt"/>`,
		"fallback": "humbleicons:arrow-right-up",
	});
}

export default Component;
