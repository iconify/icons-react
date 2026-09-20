import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxbpnfqqi.css';
import '../../css/z/z4idvfb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxbpnfqqi"/><path class="z4idvfb2y"/>`,
		"fallback": "prime:camera",
	});
}

export default Component;
