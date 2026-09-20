import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cebdwg14u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cebdwg14u"/>`,
		"fallback": "streamline-sharp:clean-broom-wipe-remix",
	});
}

export default Component;
