import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6-5sk_bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w6-5sk_bz"/>`,
		"fallback": "streamline-sharp:arrow-diagonal-2-solid",
	});
}

export default Component;
