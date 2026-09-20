import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qll2hmf4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qll2hmf4z"/>`,
		"fallback": "reicon:bolt-filled",
	});
}

export default Component;
