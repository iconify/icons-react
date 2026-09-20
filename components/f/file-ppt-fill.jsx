import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-jhqhb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-jhqhb6d"/>`,
		"fallback": "ri:file-ppt-fill",
	});
}

export default Component;
