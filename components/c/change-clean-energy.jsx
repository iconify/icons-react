import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkkkvn-jc.css';
import '../../css/v/vnaypctab.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkkkvn-jc"/><path class="vnaypctab"/>`,
		"fallback": "streamline-pixel:change-clean-energy",
	});
}

export default Component;
