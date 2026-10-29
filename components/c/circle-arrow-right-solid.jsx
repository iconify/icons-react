import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfxe5-btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfxe5-btc"/>`,
		"fallback": "withicons:circle-arrow-right-solid",
	});
}

export default Component;
