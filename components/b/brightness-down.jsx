import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvjt4o66g.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvjt4o66g"/>`,
		"fallback": "jam:brightness-down",
	});
}

export default Component;
