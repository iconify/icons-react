import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3o4ppbiw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3o4ppbiw"/>`,
		"fallback": "uiw:arrow-up",
	});
}

export default Component;
