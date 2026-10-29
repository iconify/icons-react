import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ig4pz5bxy.css';
import '../../css/f/fds5uybkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ig4pz5bxy"/><path class="fds5uybkv wm-a"/></g>`,
		"fallback": "withicons:award-solid",
	});
}

export default Component;
