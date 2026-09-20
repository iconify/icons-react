import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjc3tibnp.css';
import '../../css/d/dacej6b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjc3tibnp"/><path class="dacej6b-k"/>`,
		"fallback": "mage:color-swatch-fill",
	});
}

export default Component;
