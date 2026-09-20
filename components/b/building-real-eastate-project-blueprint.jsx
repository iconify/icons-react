import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv9g0wfdr.css';
import '../../css/l/la_1b_col.css';
import '../../css/u/u694-wbic.css';
import '../../css/x/xucop8h-e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv9g0wfdr"/><path class="la_1b_col"/><path class="u694-wbic"/><path class="xucop8h-e"/>`,
		"fallback": "streamline-pixel:building-real-eastate-project-blueprint",
	});
}

export default Component;
