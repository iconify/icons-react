import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mti2apb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mti2apb-s"/>`,
		"fallback": "coolicons:chevron-double-up-duocolor-round",
	});
}

export default Component;
