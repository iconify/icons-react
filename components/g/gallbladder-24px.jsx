import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3la963tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3la963tn"/>`,
		"fallback": "healthicons:gallbladder-24px",
	});
}

export default Component;
