import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewug2tztv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewug2tztv"/>`,
		"fallback": "ci:folder-plus",
	});
}

export default Component;
