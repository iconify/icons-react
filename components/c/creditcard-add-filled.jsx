import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt8wifbth.css';
import '../../css/k/kdpqefbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt8wifbth"/><path class="kdpqefbdy"/>`,
		"fallback": "tdesign:creditcard-add-filled",
	});
}

export default Component;
