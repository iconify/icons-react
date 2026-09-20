import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5f73wbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5f73wbzy"/>`,
		"fallback": "pixelarticons:align-horizontal-justify-center",
	});
}

export default Component;
