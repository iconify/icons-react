import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6vuirsuo.css';
import '../../css/n/nf_ef62wo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6vuirsuo"/><path class="nf_ef62wo"/>`,
		"fallback": "boxicons:calendar-x",
	});
}

export default Component;
