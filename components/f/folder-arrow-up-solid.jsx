import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnzavev7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tnzavev7b"/>`,
		"fallback": "sidekickicons:folder-arrow-up-solid",
	});
}

export default Component;
