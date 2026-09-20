import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivg_vn4vu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivg_vn4vu"/>`,
		"fallback": "tabler:flag-question",
	});
}

export default Component;
