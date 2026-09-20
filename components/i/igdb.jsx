import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i70y1sbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i70y1sbvh"/>`,
		"fallback": "simple-icons:igdb",
	});
}

export default Component;
