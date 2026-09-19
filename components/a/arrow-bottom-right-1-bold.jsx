import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekbpro7fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekbpro7fq"/>`,
		"fallback": "iconamoon:arrow-bottom-right-1-bold",
	});
}

export default Component;
