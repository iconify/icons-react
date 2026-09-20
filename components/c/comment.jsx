import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtqg49r1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtqg49r1y"/>`,
		"fallback": "uil:comment",
	});
}

export default Component;
