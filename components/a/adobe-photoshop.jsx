import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctl9dy8me.css';
import '../../css/k/kq3mrbcfj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctl9dy8me"/><path class="kq3mrbcfj"/>`,
		"fallback": "selfhst:adobe-photoshop",
	});
}

export default Component;
