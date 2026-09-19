import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apy5tabgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apy5tabgd"/>`,
		"fallback": "boxicons:bell-slash-filled",
	});
}

export default Component;
