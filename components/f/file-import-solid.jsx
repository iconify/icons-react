import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlvtd0bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dlvtd0bmm"/>`,
		"fallback": "flowbite:file-import-solid",
	});
}

export default Component;
