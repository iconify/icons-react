import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er8_6gbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er8_6gbss"/>`,
		"fallback": "tabler:alert-octagon",
	});
}

export default Component;
