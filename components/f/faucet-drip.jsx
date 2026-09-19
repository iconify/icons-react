import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g728qbc4l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g728qbc4l"/>`,
		"fallback": "fa6-solid:faucet-drip",
	});
}

export default Component;
