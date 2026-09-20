import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4y-sm.css';
import '../../css/o/oxmpwq.css';
import '../../css/j/jd_9zf.css';
import '../../css/s/so-from-24.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4y-sm oxmpwq"/><path class="jd_9zf oxmpwq"/>`,
		"fallback": "line-md:facebook",
	});
}

export default Component;
