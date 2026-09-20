import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc_-wh9rb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc_-wh9rb"/>`,
		"fallback": "tabler:file-check-filled",
	});
}

export default Component;
