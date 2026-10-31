import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quh_6hblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quh_6hblg"/>`,
		"fallback": "coolicons:egg-fill-round",
	});
}

export default Component;
