import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptuq71aun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptuq71aun"/>`,
		"fallback": "heroicons-outline:document-minus",
	});
}

export default Component;
