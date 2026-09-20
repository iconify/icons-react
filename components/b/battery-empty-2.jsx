import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6uu00ymn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6uu00ymn"/>`,
		"fallback": "streamline-sharp:battery-empty-2",
	});
}

export default Component;
