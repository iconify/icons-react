import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu9zylbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu9zylbfr"/>`,
		"fallback": "noviair:file-audio-plus",
	});
}

export default Component;
