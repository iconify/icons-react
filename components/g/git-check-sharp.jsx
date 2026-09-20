import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpyq45sbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpyq45sbd"/>`,
		"fallback": "keyline-icons:git-check-sharp",
	});
}

export default Component;
