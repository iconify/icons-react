import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqtrd97jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqtrd97jq"/>`,
		"fallback": "mingcute:dental-line",
	});
}

export default Component;
