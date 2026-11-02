import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqtcx2bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqtcx2bkw"/>`,
		"fallback": "mingcute:disabled-line",
	});
}

export default Component;
