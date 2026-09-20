import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxyz2h5nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxyz2h5nj"/>`,
		"fallback": "ri:certificate-2-fill",
	});
}

export default Component;
