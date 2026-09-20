import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so6r9ib0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so6r9ib0x"/>`,
		"fallback": "thesvg:chatwoot",
	});
}

export default Component;
