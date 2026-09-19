import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzuusgytb.css';
import '../../css/t/t_wx_r-8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzuusgytb"/><path class="t_wx_r-8q"/>`,
		"fallback": "bx:bxs-user-voice",
	});
}

export default Component;
