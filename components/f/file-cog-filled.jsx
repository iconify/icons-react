import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryrhgi3ds.css';
import '../../css/x/x43m2tg3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryrhgi3ds"/><path class="x43m2tg3u"/>`,
		"fallback": "boxicons:file-cog-filled",
	});
}

export default Component;
