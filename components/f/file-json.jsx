import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq4y0sbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq4y0sbex"/>`,
		"fallback": "tdesign:file-json",
	});
}

export default Component;
