import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu0_6bbna.css';
import '../../css/o/obz-b-bgc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu0_6bbna"/><path class="obz-b-bgc"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-mobile",
	});
}

export default Component;
