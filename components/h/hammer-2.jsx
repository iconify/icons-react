import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo-ryxbnx.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo-ryxbnx"/>`,
		"fallback": "lineicons:hammer-2",
	});
}

export default Component;
