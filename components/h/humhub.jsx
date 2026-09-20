import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc2x0wbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc2x0wbhl"/>`,
		"fallback": "simple-icons:humhub",
	});
}

export default Component;
