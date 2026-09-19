import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmoyf02wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmoyf02wx"/>`,
		"fallback": "griddy-icons:instagram",
	});
}

export default Component;
