import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pti1bcc6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pti1bcc6x"/>`,
		"fallback": "si:fact-check-fill",
	});
}

export default Component;
