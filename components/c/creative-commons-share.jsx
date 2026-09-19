import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz5t1_nzh.css';
import '../../css/e/evz6bnbta.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz5t1_nzh"/><path class="evz6bnbta"/>`,
		"fallback": "entypo:creative-commons-share",
	});
}

export default Component;
