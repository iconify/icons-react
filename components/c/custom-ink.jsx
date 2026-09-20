import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7fec_l4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7fec_l4t"/>`,
		"fallback": "thesvg-color:custom-ink",
	});
}

export default Component;
