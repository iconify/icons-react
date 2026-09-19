import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg6p86m_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg6p86m_y"/>`,
		"fallback": "file-icons:ffmpeg",
	});
}

export default Component;
