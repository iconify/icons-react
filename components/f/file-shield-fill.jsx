import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/milhnrb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="milhnrb2y"/>`,
		"fallback": "ri:file-shield-fill",
	});
}

export default Component;
