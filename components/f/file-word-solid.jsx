import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnr-ymb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tnr-ymb1s"/>`,
		"fallback": "flowbite:file-word-solid",
	});
}

export default Component;
