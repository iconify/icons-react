import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra485_f5s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ra485_f5s"/>`,
		"fallback": "sidekickicons:document-x-mark-16-solid",
	});
}

export default Component;
