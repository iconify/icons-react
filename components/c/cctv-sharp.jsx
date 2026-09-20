import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhdk_e98b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhdk_e98b"/>`,
		"fallback": "keyline-icons:cctv-sharp",
	});
}

export default Component;
