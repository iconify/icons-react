import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgf237vtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgf237vtc"/>`,
		"fallback": "noviair:alarm-clock-x",
	});
}

export default Component;
