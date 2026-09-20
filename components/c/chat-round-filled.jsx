import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_-jwo.css';
import '../../css/y/ydovum.css';
import '../../css/b/b9qm4w.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_-jwo ydovum"/><path class="b9qm4w ydovum"/>`,
		"fallback": "line-md:chat-round-filled",
	});
}

export default Component;
