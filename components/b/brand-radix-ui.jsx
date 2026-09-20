import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcbq-w_3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcbq-w_3p"/>`,
		"fallback": "tabler:brand-radix-ui",
	});
}

export default Component;
