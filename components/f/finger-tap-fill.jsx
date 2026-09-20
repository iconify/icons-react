import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmu2mhb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gmu2mhb1x"/>`,
		"fallback": "mingcute:finger-tap-fill",
	});
}

export default Component;
