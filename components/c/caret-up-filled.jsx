import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqh3gbb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqh3gbb8m"/>`,
		"fallback": "tabler:caret-up-filled",
	});
}

export default Component;
