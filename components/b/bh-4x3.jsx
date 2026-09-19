import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agv0_db3u.css';
import '../../css/s/s_kdtkgoz.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agv0_db3u"/><path class="s_kdtkgoz"/>`,
		"fallback": "flag:bh-4x3",
	});
}

export default Component;
