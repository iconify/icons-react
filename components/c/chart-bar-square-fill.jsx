import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj14-pijc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj14-pijc"/>`,
		"fallback": "f7:chart-bar-square-fill",
	});
}

export default Component;
