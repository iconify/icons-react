import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xerf8cb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xerf8cb7a"/>`,
		"fallback": "mingcute:heading-4-line",
	});
}

export default Component;
