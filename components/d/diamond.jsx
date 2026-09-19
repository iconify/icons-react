import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgoybvlkl.css';

const viewBox = {"width":2048,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgoybvlkl"/>`,
		"fallback": "fa:diamond",
	});
}

export default Component;
