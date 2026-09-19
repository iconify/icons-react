import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvu0d3bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvu0d3bkv"/>`,
		"fallback": "cbi:echo-show-8-gen-2",
	});
}

export default Component;
