import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/treytrb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="treytrb4g"/>`,
		"fallback": "hugeicons:diagonal-scroll-point-02",
	});
}

export default Component;
