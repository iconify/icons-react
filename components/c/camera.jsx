import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7aog5bof.css';
import '../../css/g/gysnikbzf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7aog5bof"/><path class="gysnikbzf"/>`,
		"fallback": "cil:camera",
	});
}

export default Component;
