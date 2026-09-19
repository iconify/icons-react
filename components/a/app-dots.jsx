import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmkfoccpl.css';
import '../../css/w/wllfbt0-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer fmkfoccpl"/><path class="duoicon-secondary-layer wllfbt0-k"/>`,
		"fallback": "duo-icons:app-dots",
	});
}

export default Component;
