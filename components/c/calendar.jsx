import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rn0ebub3w.css';
import '../../css/q/qug2m8aox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="rn0ebub3w"/><path class="qug2m8aox"/></g>`,
		"fallback": "akar-icons:calendar",
	});
}

export default Component;
