import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8b-p0atb.css';
import '../../css/r/rw8uhq80v.css';
import '../../css/f/f6u8m20fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8b-p0atb"/><path class="rw8uhq80v"/><path class="f6u8m20fx"/>`,
		"fallback": "token:boba",
	});
}

export default Component;
