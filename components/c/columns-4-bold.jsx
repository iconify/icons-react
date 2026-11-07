import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8rlbkdii.css';
import '../../css/s/stpgr5ezp.css';
import '../../css/h/h1b59mcwr.css';
import '../../css/s/sss82lbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8rlbkdii"/><path class="stpgr5ezp"/><path class="h1b59mcwr"/><path class="sss82lbrz"/>`,
		"fallback": "solar:columns-4-bold",
	});
}

export default Component;
