import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy2v1xbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy2v1xbjj"/>`,
		"fallback": "tabler:brand-zapier",
	});
}

export default Component;
