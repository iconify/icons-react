import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmdn5gl4d.css';
import '../../css/f/fglfh0u3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmdn5gl4d"/><path class="fglfh0u3u"/>`,
		"fallback": "tdesign:bug-filled",
	});
}

export default Component;
