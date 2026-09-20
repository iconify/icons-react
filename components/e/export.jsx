import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnlw47_jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnlw47_jg"/>`,
		"fallback": "typcn:export",
	});
}

export default Component;
