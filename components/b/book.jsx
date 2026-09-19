import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yox3j-b4i.css';
import '../../css/i/ivt8o-bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yox3j-b4i"/><path class="ivt8o-bva"/>`,
		"fallback": "boxicons:book",
	});
}

export default Component;
