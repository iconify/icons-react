import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg8g64d4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg8g64d4f"/>`,
		"fallback": "mage:dots-horizontal-circle-fill",
	});
}

export default Component;
