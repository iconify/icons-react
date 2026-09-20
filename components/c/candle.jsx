import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3_9axbeg.css';
import '../../css/d/das08qb6u.css';
import '../../css/w/wlpl3rydx.css';
import '../../css/x/x0ob3uo9t.css';
import '../../css/p/p3-ad7b2x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3_9axbeg"/><path class="das08qb6u"/><path class="wlpl3rydx"/><path class="x0ob3uo9t"/><path class="p3-ad7b2x"/>`,
		"fallback": "openmoji:candle",
	});
}

export default Component;
