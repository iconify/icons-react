import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir17xnytb.css';
import '../../css/b/b949_hboo.css';
import '../../css/t/tsjlmkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer ir17xnytb"/><path class="b949_hboo duoicon-primary-layer"/><path class="duoicon-secondary-layer tsjlmkb4g"/>`,
		"fallback": "duo-icons:app",
	});
}

export default Component;
