import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkgu3wbhs.css';
import '../../css/d/ds9yhnr-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkgu3wbhs"/><path class="ds9yhnr-s"/>`,
		"fallback": "ci:chat-alt",
	});
}

export default Component;
