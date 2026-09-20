import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xye7cnqaq.css';
import '../../css/j/j06c4gncv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xye7cnqaq"/><path class="j06c4gncv"/>`,
		"fallback": "token:arc",
	});
}

export default Component;
