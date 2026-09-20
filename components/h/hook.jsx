import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpgxckbdv.css';
import '../../css/u/us1tjmb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpgxckbdv"/><path class="us1tjmb7z"/>`,
		"fallback": "token:hook",
	});
}

export default Component;
