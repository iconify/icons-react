import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zovczcbsn.css';
import '../../css/g/g_ku85bmz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zovczcbsn"/><path class="g_ku85bmz"/>`,
		"fallback": "nimbus:calendar-days",
	});
}

export default Component;
