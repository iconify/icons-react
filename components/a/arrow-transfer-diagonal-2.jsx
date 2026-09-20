import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s03g3-7yd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s03g3-7yd"/>`,
		"fallback": "streamline:arrow-transfer-diagonal-2",
	});
}

export default Component;
