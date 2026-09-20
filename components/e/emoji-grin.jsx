import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_osj0ijb.css';
import '../../css/h/h7n9wpcnw.css';
import '../../css/j/jb0hwxb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_osj0ijb"/><path clip-rule="evenodd" class="h7n9wpcnw"/><path clip-rule="evenodd" class="jb0hwxb_a"/>`,
		"fallback": "lineicons:emoji-grin",
	});
}

export default Component;
