import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtohnhb-v.css';
import '../../css/z/z2kae53lq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtohnhb-v"/><path class="z2kae53lq"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-chess-knight",
	});
}

export default Component;
