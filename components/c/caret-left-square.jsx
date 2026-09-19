import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb-ee9b3j.css';
import '../../css/b/bwcanry2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb-ee9b3j"/><path class="bwcanry2a"/>`,
		"fallback": "boxicons:caret-left-square",
	});
}

export default Component;
