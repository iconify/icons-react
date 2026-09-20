import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zscif1bll.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zscif1bll"/>`,
		"fallback": "maki:grocery",
	});
}

export default Component;
