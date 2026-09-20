import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chyip73rw.css';
import '../../css/i/iyrdw09zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chyip73rw"/><path clip-rule="evenodd" class="iyrdw09zc"/>`,
		"fallback": "mingcute:broom-line",
	});
}

export default Component;
