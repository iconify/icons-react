import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngr53jb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngr53jb3t"/>`,
		"fallback": "tdesign:bridge-4",
	});
}

export default Component;
