import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9-n5-bxs.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9-n5-bxs"/>`,
		"fallback": "jam:fast-forward",
	});
}

export default Component;
