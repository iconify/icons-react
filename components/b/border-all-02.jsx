import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5m4_176g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5m4_176g"/>`,
		"fallback": "hugeicons:border-all-02",
	});
}

export default Component;
