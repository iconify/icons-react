import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8bbxr3ye.css';
import '../../css/i/i28ld-2jv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8bbxr3ye duoicon-secondary-layer"/><path class="duoicon-primary-layer i28ld-2jv"/>`,
		"fallback": "duo-icons:bank",
	});
}

export default Component;
