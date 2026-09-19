import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfrb58b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfrb58b3f"/>`,
		"fallback": "humbleicons:exchange-vertical",
	});
}

export default Component;
