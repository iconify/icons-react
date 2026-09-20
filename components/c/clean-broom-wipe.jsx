import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh_w0ccwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh_w0ccwb"/>`,
		"fallback": "streamline-sharp:clean-broom-wipe",
	});
}

export default Component;
