import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy-z_rbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gy-z_rbqi"/>`,
		"fallback": "nrk:dice-2-active",
	});
}

export default Component;
