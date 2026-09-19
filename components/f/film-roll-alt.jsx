import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtvhlccsf.css';
import '../../css/q/qlh3irf0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtvhlccsf"/><path class="qlh3irf0m"/>`,
		"fallback": "boxicons:film-roll-alt",
	});
}

export default Component;
