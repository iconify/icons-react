import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw5a_8jwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw5a_8jwf"/>`,
		"fallback": "token:ever",
	});
}

export default Component;
