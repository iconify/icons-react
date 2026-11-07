import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8yegacmv.css';
import '../../css/m/mrtelsu8o.css';
import '../../css/d/d05iscbzr.css';
import '../../css/f/fype3xbzj.css';
import '../../css/c/c742_q1jj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v8yegacmv"/><path class="mrtelsu8o"/><path class="d05iscbzr"/><path class="fype3xbzj"/><path class="c742_q1jj"/>`,
		"fallback": "solar:diploma-bold",
	});
}

export default Component;
