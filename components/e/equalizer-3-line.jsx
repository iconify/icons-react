import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g98ny67fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g98ny67fw"/>`,
		"fallback": "ri:equalizer-3-line",
	});
}

export default Component;
