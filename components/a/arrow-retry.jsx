import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc_63cp2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc_63cp2i"/>`,
		"fallback": "stash:arrow-retry",
	});
}

export default Component;
