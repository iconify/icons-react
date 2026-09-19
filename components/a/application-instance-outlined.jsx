import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_mcmiblg.css';
import '../../css/y/y73gmufio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_mcmiblg"/><path class="y73gmufio"/>`,
		"fallback": "eos-icons:application-instance-outlined",
	});
}

export default Component;
