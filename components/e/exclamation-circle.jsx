import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_ma8083f.css';
import '../../css/v/vla37tbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_ma8083f"/><path class="vla37tbfm"/>`,
		"fallback": "stash:exclamation-circle",
	});
}

export default Component;
