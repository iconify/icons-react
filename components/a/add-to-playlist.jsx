import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlfft2byz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlfft2byz"/>`,
		"fallback": "streamline-flex:add-to-playlist",
	});
}

export default Component;
