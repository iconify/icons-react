import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzzw40e_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kzzw40e_v"/>`,
		"fallback": "solar:archive-up-outline",
	});
}

export default Component;
