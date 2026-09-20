import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_ma8083f.css';
import '../../css/v/v9y5wi_ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_ma8083f"/><path class="v9y5wi_ot"/>`,
		"fallback": "stash:exclamation-circle-light",
	});
}

export default Component;
