import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br1-2ibkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br1-2ibkg"/>`,
		"fallback": "tdesign:chevron-up-double-s",
	});
}

export default Component;
