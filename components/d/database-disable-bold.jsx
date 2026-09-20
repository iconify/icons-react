import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8eigqm8a.css';
import '../../css/c/ccy8wxb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8eigqm8a"/><path class="ccy8wxb6h"/>`,
		"fallback": "streamline-ultimate:database-disable-bold",
	});
}

export default Component;
