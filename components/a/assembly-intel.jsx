import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv762_3ya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv762_3ya"/>`,
		"fallback": "file-icons:assembly-intel",
	});
}

export default Component;
