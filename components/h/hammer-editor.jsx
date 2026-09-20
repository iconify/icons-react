import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn9zjzj1e.css';
import '../../css/m/m52u-s6oe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn9zjzj1e"/><path class="m52u-s6oe"/>`,
		"fallback": "selfhst:hammer-editor",
	});
}

export default Component;
