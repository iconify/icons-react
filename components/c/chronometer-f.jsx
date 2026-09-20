import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_stj679q.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_stj679q"/>`,
		"fallback": "jam:chronometer-f",
	});
}

export default Component;
