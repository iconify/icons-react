import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gck3udbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gck3udbpl"/>`,
		"fallback": "tdesign:history",
	});
}

export default Component;
