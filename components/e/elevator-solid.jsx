import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqun_gwda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqun_gwda"/>`,
		"fallback": "mynaui:elevator-solid",
	});
}

export default Component;
