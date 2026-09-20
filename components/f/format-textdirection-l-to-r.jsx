import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlvk1-bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlvk1-bkv"/>`,
		"fallback": "mdi:format-textdirection-l-to-r",
	});
}

export default Component;
