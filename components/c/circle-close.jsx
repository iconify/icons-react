import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leeazsipl.css';
import '../../css/h/hmk826btk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leeazsipl"/><path class="hmk826btk"/>`,
		"fallback": "ep:circle-close",
	});
}

export default Component;
