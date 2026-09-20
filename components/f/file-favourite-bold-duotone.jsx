import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j59i-d3bj.css';
import '../../css/w/wzmgbfbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j59i-d3bj"/><path class="wzmgbfbhs"/>`,
		"fallback": "solar:file-favourite-bold-duotone",
	});
}

export default Component;
