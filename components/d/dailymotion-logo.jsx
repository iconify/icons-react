import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xdkhpac3a.css';
import '../../css/l/l6dq44_au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="xdkhpac3a"/><path class="l6dq44_au"/></g>`,
		"fallback": "streamline-logos:dailymotion-logo",
	});
}

export default Component;
