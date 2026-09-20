import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihwg2nacl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihwg2nacl"/>`,
		"fallback": "sidekickicons:checklist-boxes",
	});
}

export default Component;
