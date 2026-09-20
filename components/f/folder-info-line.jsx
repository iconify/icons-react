import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gba0ul-cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gba0ul-cb"/>`,
		"fallback": "ri:folder-info-line",
	});
}

export default Component;
