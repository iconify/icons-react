import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a25lipl2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a25lipl2k"/>`,
		"fallback": "gg:corner-down-right",
	});
}

export default Component;
