import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guc4irqmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guc4irqmg"/>`,
		"fallback": "tabler:alert-square-rounded-filled",
	});
}

export default Component;
