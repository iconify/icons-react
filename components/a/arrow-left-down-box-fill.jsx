import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1zz_mb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1zz_mb1s"/>`,
		"fallback": "ri:arrow-left-down-box-fill",
	});
}

export default Component;
