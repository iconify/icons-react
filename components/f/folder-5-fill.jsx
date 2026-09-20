import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za36t9wna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za36t9wna"/>`,
		"fallback": "ri:folder-5-fill",
	});
}

export default Component;
