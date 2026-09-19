import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/texanzbed.css';
import '../../css/f/fmf3k-28m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer texanzbed"/><path class="duoicon-primary-layer fmf3k-28m"/>`,
		"fallback": "duo-icons:building",
	});
}

export default Component;
