import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb1geub1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb1geub1u"/>`,
		"fallback": "streamline-sharp:dashboard-circle",
	});
}

export default Component;
