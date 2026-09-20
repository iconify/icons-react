import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfd1srn4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfd1srn4h"/>`,
		"fallback": "tabler:drone-off",
	});
}

export default Component;
