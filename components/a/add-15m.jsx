import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1_urfjkp.css';
import '../../css/y/yso8g2bdg.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1_urfjkp"/><path class="yso8g2bdg"/>`,
		"fallback": "iwwa:add-15m",
	});
}

export default Component;
