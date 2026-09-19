import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df37-cbqt.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df37-cbqt"/>`,
		"fallback": "el:download-alt",
	});
}

export default Component;
