import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6599-3lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6599-3lv"/>`,
		"fallback": "cil:drop1",
	});
}

export default Component;
