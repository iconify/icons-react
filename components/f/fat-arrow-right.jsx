import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvsjprm_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvsjprm_g"/>`,
		"fallback": "mynaui:fat-arrow-right",
	});
}

export default Component;
