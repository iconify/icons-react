import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u--3evbhh.css';
import '../../css/l/lseytrb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u--3evbhh"/><path class="lseytrb_k"/>`,
		"fallback": "streamline-ultimate:cd-playing-bold",
	});
}

export default Component;
