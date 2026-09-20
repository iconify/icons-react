import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1ovajluh.css';
import '../../css/u/u4bxzabim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1ovajluh"/><path class="u4bxzabim"/>`,
		"fallback": "streamline-ultimate:desktop-computer-1-bold",
	});
}

export default Component;
