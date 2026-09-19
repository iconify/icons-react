import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nekq049yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nekq049yx"/>`,
		"fallback": "griddy-icons:credit-card-off-alt",
	});
}

export default Component;
