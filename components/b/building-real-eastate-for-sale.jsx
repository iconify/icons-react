import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpg556eqh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpg556eqh"/>`,
		"fallback": "streamline-pixel:building-real-eastate-for-sale",
	});
}

export default Component;
