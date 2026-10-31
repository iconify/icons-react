import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-qr-tb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-qr-tb_l"/>`,
		"fallback": "coolicons:arrow-up-left-small-bulk-round",
	});
}

export default Component;
