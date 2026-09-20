import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps1r537wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps1r537wx"/>`,
		"fallback": "ri:file-info-fill",
	});
}

export default Component;
