import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyneov3ti.css';
import '../../css/j/jiglepbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer iyneov3ti"/><path class="duoicon-primary-layer jiglepbdo"/>`,
		"fallback": "duo-icons:clock",
	});
}

export default Component;
