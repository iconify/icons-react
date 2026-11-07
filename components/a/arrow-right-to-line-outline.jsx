import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yybu3hn3z.css';
import '../../css/o/oa733acec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yybu3hn3z"/><path class="oa733acec"/>`,
		"fallback": "solar:arrow-right-to-line-outline",
	});
}

export default Component;
