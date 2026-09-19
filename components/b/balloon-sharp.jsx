import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_rns8jjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_rns8jjp"/>`,
		"fallback": "famicons:balloon-sharp",
	});
}

export default Component;
