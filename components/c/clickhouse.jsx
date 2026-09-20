import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0j8-xbhn.css';
import '../../css/z/z54z46b3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0j8-xbhn"/><path class="z54z46b3e"/>`,
		"fallback": "selfhst:clickhouse",
	});
}

export default Component;
