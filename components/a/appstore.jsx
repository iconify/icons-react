import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjoy21biv.css';
import '../../css/m/m126krlgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjoy21biv duoicon-secondary-layer"/><path class="duoicon-primary-layer m126krlgd"/>`,
		"fallback": "duo-icons:appstore",
	});
}

export default Component;
