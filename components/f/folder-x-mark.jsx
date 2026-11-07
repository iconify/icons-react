import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwbb1jbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwbb1jbku"/>`,
		"fallback": "sidekickicons:folder-x-mark",
	});
}

export default Component;
