import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggn_p2b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggn_p2b7u"/>`,
		"fallback": "meteor-icons:arrow-right",
	});
}

export default Component;
