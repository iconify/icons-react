import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n--glj5wx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n--glj5wx"/>`,
		"fallback": "dashicons:format-chat",
	});
}

export default Component;
