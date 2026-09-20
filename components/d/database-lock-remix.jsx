import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_yenib_z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q_yenib_z"/>`,
		"fallback": "streamline:database-lock-remix",
	});
}

export default Component;
