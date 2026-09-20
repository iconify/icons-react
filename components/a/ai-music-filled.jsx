import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl8ymfb2m.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl8ymfb2m"/>`,
		"fallback": "tdesign:ai-music-filled",
	});
}

export default Component;
