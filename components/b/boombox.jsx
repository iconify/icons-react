import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah5mw8brc.css';
import '../../css/t/tsy_4oboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah5mw8brc"/><path class="tsy_4oboe"/>`,
		"fallback": "boxicons:boombox",
	});
}

export default Component;
