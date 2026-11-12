import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em1uhysbp.css';
import '../../css/w/wp14jkbxl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em1uhysbp"/><path class="wp14jkbxl"/>`,
		"fallback": "selfhst:domain-watchdog-light",
	});
}

export default Component;
