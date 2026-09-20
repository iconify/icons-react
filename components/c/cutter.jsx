import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvbbl6ipz.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvbbl6ipz"/>`,
		"fallback": "jam:cutter",
	});
}

export default Component;
