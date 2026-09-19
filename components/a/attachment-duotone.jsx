import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv42s-bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv42s-bwo"/>`,
		"fallback": "iconamoon:attachment-duotone",
	});
}

export default Component;
