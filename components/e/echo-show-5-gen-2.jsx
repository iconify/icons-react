import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d90m7rm_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d90m7rm_x"/>`,
		"fallback": "cbi:echo-show-5-gen-2",
	});
}

export default Component;
