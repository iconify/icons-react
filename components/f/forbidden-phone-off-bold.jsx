import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kplff-6wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kplff-6wx"/>`,
		"fallback": "streamline-ultimate:forbidden-phone-off-bold",
	});
}

export default Component;
