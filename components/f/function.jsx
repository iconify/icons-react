import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1rq0ve2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1rq0ve2f"/>`,
		"fallback": "andrsrxn:function",
	});
}

export default Component;
