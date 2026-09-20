import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxdu6ebxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxdu6ebxm"/>`,
		"fallback": "tabler:brand-polymer",
	});
}

export default Component;
