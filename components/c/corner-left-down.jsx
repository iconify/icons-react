import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv3fe1b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv3fe1b7d"/>`,
		"fallback": "uit:corner-left-down",
	});
}

export default Component;
