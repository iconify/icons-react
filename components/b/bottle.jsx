import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9-_0pbhw.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9-_0pbhw"/>`,
		"fallback": "jam:bottle",
	});
}

export default Component;
