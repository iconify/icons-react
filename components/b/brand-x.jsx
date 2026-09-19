import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usal9-nwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usal9-nwg"/>`,
		"fallback": "humbleicons:brand-x",
	});
}

export default Component;
