import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh7g0yt1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh7g0yt1l"/>`,
		"fallback": "gg:format-indent-decrease",
	});
}

export default Component;
