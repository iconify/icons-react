import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acmnv-6wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acmnv-6wx"/>`,
		"fallback": "lucide:braces",
	});
}

export default Component;
