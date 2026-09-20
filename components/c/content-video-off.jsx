import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfchthbsw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfchthbsw"/>`,
		"fallback": "streamline-block:content-video-off",
	});
}

export default Component;
