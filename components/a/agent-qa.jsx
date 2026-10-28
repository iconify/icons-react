import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-is0ofdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-is0ofdq"/>`,
		"fallback": "thesvg:agent-qa",
	});
}

export default Component;
