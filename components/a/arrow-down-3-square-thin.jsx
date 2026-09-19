import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo1_vnkyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo1_vnkyu"/>`,
		"fallback": "iconamoon:arrow-down-3-square-thin",
	});
}

export default Component;
