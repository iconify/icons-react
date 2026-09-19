import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hot9i3b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hot9i3b-z"/>`,
		"fallback": "flowbite:file-icvoice-solid",
	});
}

export default Component;
