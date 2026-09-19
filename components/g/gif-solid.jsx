import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyxqmouzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vyxqmouzv"/>`,
		"fallback": "heroicons:gif-solid",
	});
}

export default Component;
