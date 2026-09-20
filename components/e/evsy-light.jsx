import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbpz_ob3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbpz_ob3x"/>`,
		"fallback": "selfhst:evsy-light",
	});
}

export default Component;
