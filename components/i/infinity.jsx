import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcg9s5btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcg9s5btc"/>`,
		"fallback": "stash:infinity",
	});
}

export default Component;
