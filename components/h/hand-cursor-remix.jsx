import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oljv3-_nv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oljv3-_nv"/>`,
		"fallback": "streamline:hand-cursor-remix",
	});
}

export default Component;
