import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwyhpo9nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uwyhpo9nz"/>`,
		"fallback": "lucide-extended:circle-arrow-up-filled",
	});
}

export default Component;
