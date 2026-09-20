import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivanhnbdc.css';
import '../../css/q/q-befwo0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivanhnbdc"/><path class="q-befwo0v"/>`,
		"fallback": "pixel:bank",
	});
}

export default Component;
