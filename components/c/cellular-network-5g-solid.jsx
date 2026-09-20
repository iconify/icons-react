import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7jffh02v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k7jffh02v"/>`,
		"fallback": "streamline-sharp:cellular-network-5g-solid",
	});
}

export default Component;
