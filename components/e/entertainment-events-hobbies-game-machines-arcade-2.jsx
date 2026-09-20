import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2ip6qb2q.css';
import '../../css/j/jdp4u-8vv.css';
import '../../css/d/d0v_wkbug.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2ip6qb2q"/><path class="jdp4u-8vv"/><path class="d0v_wkbug"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-game-machines-arcade-2",
	});
}

export default Component;
