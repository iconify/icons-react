import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz64edhvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz64edhvg"/>`,
		"fallback": "token:cti",
	});
}

export default Component;
