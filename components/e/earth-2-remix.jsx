import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mza2qzbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mza2qzbll"/>`,
		"fallback": "streamline-sharp:earth-2-remix",
	});
}

export default Component;
