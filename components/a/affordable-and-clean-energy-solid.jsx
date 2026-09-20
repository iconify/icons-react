import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lombof_ph.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lombof_ph"/>`,
		"fallback": "streamline:affordable-and-clean-energy-solid",
	});
}

export default Component;
