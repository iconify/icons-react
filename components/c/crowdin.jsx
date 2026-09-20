import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqgyks5ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqgyks5ti"/>`,
		"fallback": "thesvg:crowdin",
	});
}

export default Component;
